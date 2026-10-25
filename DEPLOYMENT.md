# Deployment

Production deploys run from GitHub Actions ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)). No server details live in this repo — every host, user and path comes from repository secrets.

## When it runs

- Every push to `main`, except pushes that only touch `next-portfolio/**` (a design sandbox; it is not part of the Laravel build).
- Manually: **Actions → Deploy → Run workflow**.
- One deploy at a time; a second push waits for the first to finish.
- Only on `SirCoolMind/vFolio_Hafiz` — forks never run it.

## What it does

1. **Validate secrets** — every secret must be set; paths must match strict patterns (absolute, under `/var/www/`, no `..`, no trailing slash).
2. **Build** — `npm ci && npm run build` on the GitHub runner. `public/build/` is **not committed**; CI builds it every deploy.
3. **Preflight** on the server — checks every directory, file and binary the deploy touches. If any is missing, the run stops **before** maintenance mode, so the live site is untouched.
4. **Update** — `artisan down` (skipped if the site is already in maintenance, e.g. during a manual PHP-version cutover), `git fetch` + `git reset --hard origin/main` (untracked files such as `.env` are left alone).
5. **Upload assets** — `rsync --delete` of the built `public/build/` to the server.
6. **Finish** — `composer install --no-dev`, `artisan migrate --force`, `config:cache`, `route:cache`, `view:cache`.
7. **Up** — `artisan up` always runs once maintenance mode was entered, even if a step failed.

Server-side steps live in [.github/deploy/remote.sh](.github/deploy/remote.sh); it receives every path as an argument and re-validates it before each step.

## Rules for anyone touching deploy commands

- **Full absolute paths in every command.** Never `cd dir && ./relative`. Use `git -C <path>`, `composer --working-dir=<path>`, `php <path>/artisan`.
- **Guard before destroying.** Every path is checked to exist before `rsync --delete`, `rm` or `reset`. If a check fails, stop immediately.
- **Never build a destination from a variable that might be empty** — validate it first.

## Required repository secrets

| Secret | Meaning |
| --- | --- |
| `DEPLOY_HOST` | Server hostname or IP |
| `DEPLOY_USER` | Non-root SSH user that owns the app directory |
| `DEPLOY_PATH` | Absolute app path under `/var/www/`, no trailing slash |
| `DEPLOY_PHP_BIN` | Absolute path to the PHP CLI matching the PHP-FPM version serving the site |
| `DEPLOY_COMPOSER_BIN` | Absolute path to Composer |
| `DEPLOY_SSH_KEY` | Private key (ed25519) used only by this workflow |
| `DEPLOY_KNOWN_HOSTS` | Server host key line (`ssh-keyscan -t ed25519 <host>`) — pins the host |

## One-time server setup (placeholders)

Run as root. Replace `<app-path>`, `<deploy-user>`, `<php-version>`.

```bash
set -euo pipefail
test -f <app-path>/artisan
/usr/sbin/useradd --create-home --home-dir /home/<deploy-user> --shell /bin/bash --groups www-data <deploy-user>
/usr/bin/chown -R <deploy-user>:www-data <app-path>
/usr/bin/chmod -R g+rwX <app-path>/storage <app-path>/bootstrap/cache
/usr/bin/chmod 640 <app-path>/.env
/usr/bin/install -d -m 700 -o <deploy-user> -g <deploy-user> /home/<deploy-user>/.ssh
# Put "restrict <public key>" in /home/<deploy-user>/.ssh/authorized_keys (mode 600, owned by <deploy-user>)
# PHP CLI for <php-version> must have the extensions composer requires (e.g. php<php-version>-xml, -mbstring, -curl)
```

The deploy user needs **no sudo**.

## Re-run / roll back

- **Re-run:** Actions → Deploy → pick the run → **Re-run all jobs**, or **Run workflow** on `main`.
- **Roll back:** `git revert <bad-commit>` on `main` and push — the revert deploys like any other change.

## Local development

`public/build/` is git-ignored. Run `npm run dev` (or `npm run build`) locally as before; build output never needs committing.
