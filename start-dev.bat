@echo off
title Starting vFolio Local Development Servers...
echo =======================================================
echo  Starting Laravel Server (http://127.0.0.1:8000)
echo  and Vite HMR Dev Server
echo =======================================================
echo.

start "Laravel Artisan Server" /min C:\laragon\bin\php\php-8.1.10-Win32-vs16-x64\php.exe artisan serve
start "Vite Dev Server" npm run dev

echo.
echo Both servers launched in background!
echo Access your site at: http://127.0.0.1:8000
echo.
pause
