#!/usr/bin/env bash
# Remote deploy steps, streamed over SSH by .github/workflows/deploy.yml.
# Holds no server-specific values: every path arrives as an argument (from repo secrets)
# and is validated before anything runs. Any failed check aborts immediately.
#
# Usage: bash -s -- <step> <app_path> <php_bin> <composer_bin>
#   step: preflight | update | finish | up
set -euo pipefail

STEP="${1:?step argument missing}"
APP="${2:?app path argument missing}"
PHP_BIN="${3:?php binary argument missing}"
COMPOSER_BIN="${4:?composer binary argument missing}"
GIT_BIN=/usr/bin/git

fail() { echo "GUARD FAILED: $*" >&2; exit 1; }

guard_path() {
  [[ "$APP" =~ ^/var/www/[A-Za-z0-9._-]+(/[A-Za-z0-9._-]+)*$ ]] || fail "app path must be absolute, under /var/www/, without trailing slash"
  [[ "$APP" != *..* ]] || fail "app path must not contain '..'"
  test -d "$APP" || fail "missing directory: $APP"
  test -f "$APP/artisan" || fail "missing file: $APP/artisan"
  test -x "$PHP_BIN" || fail "missing binary: $PHP_BIN"
}

guard_all() {
  guard_path
  for f in "$APP/public/index.php" "$APP/.env" "$APP/composer.json" "$APP/composer.lock"; do
    test -f "$f" || fail "missing file: $f"
  done
  for d in "$APP/.git" "$APP/public" "$APP/storage" "$APP/bootstrap/cache"; do
    test -d "$d" || fail "missing directory: $d"
  done
  test -w "$APP/storage" || fail "not writable: $APP/storage"
  test -w "$APP/bootstrap/cache" || fail "not writable: $APP/bootstrap/cache"
  for b in "$COMPOSER_BIN" "$GIT_BIN"; do
    test -x "$b" || fail "missing binary: $b"
  done
}

case "$STEP" in
  preflight)
    # Runs before maintenance mode: if anything is off, the live site is never touched.
    guard_all
    test -d "$APP/public/build" || fail "missing directory: $APP/public/build"
    echo "Preflight OK. Current commit: $("$GIT_BIN" -C "$APP" rev-parse --short HEAD)"
    ;;
  update)
    guard_all
    "$PHP_BIN" "$APP/artisan" down --retry=15
    "$GIT_BIN" -C "$APP" fetch --prune origin main
    "$GIT_BIN" -C "$APP" reset --hard origin/main
    guard_all
    echo "Code updated to: $("$GIT_BIN" -C "$APP" rev-parse --short HEAD)"
    ;;
  finish)
    guard_all
    test -f "$APP/public/build/manifest.json" || fail "missing file: $APP/public/build/manifest.json"
    "$PHP_BIN" "$COMPOSER_BIN" install --working-dir="$APP" --no-dev --optimize-autoloader --no-interaction --no-progress --prefer-dist
    "$PHP_BIN" "$APP/artisan" migrate --force
    "$PHP_BIN" "$APP/artisan" config:cache
    "$PHP_BIN" "$APP/artisan" route:cache
    "$PHP_BIN" "$APP/artisan" view:cache
    ;;
  up)
    guard_path
    "$PHP_BIN" "$APP/artisan" up
    ;;
  *)
    fail "unknown step: $STEP"
    ;;
esac
