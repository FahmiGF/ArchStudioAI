@echo off
chcp 65001 >nul
title ArchStudio AI — Architecture Simulator (Port 8002)

echo =====================================================================
echo           ArchStudio AI — 3D Architecture Simulator
echo      Interior & Exterior Simulator with Liquid AI LFM 8B
echo =====================================================================
echo.

cd /d "%~dp0"
if exist "backend\" (
    cd backend
) else if exist "archstudio-ai\backend\" (
    cd "archstudio-ai\backend"
)

echo [1/3] Memeriksa dependensi Python...
pip install -r requirements.txt --quiet --disable-pip-version-check

echo [2/3] Membuka antarmuka ArchStudio AI di browser...
start http://localhost:8002

echo [3/3] Menjalankan server ArchStudio AI di http://localhost:8002 ...
echo.
echo =====================================================================
echo   ArchStudio AI berjalan di port 8002.
echo   Tekan Ctrl+C untuk menghentikan server.
echo =====================================================================
echo.

python run.py
pause
