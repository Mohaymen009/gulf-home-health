@echo off
REM ===============================
REM Auto Push All Files to GitHub
REM ===============================

REM Navigate to your GitHub project folder
cd /d "C:\Users\mohaymen\Desktop\EMRS HOME HEALTHCARE SOURCE"

REM Initialize Git if not already done
git init

REM Remove old origin if exists and set your repo
git remote remove origin 2>nul
git remote add origin https://github.com/Mohaymen009/gulf-home-health.git

REM Stage all changes
git add .

REM Commit with timestamp (no need to type message)
for /f "tokens=1-5 delims=/: " %%d in ("%date% %time%") do set timestamp=%%d-%%e-%%f_%%g-%%h
git commit -m "Auto-commit %timestamp%"

REM Pull latest changes to prevent conflicts
git pull origin main --allow-unrelated-histories

REM Push to GitHub
git push -u origin main

echo.
echo All files have been pushed to GitHub!
pause