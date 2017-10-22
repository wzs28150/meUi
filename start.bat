@echo off
echo 欢迎使用wzs网站js模块打包程序！
echo 当前批处理全路径目录：%cd% 
set /p=请按回车键继续. . .
node %cd%/r.js  -o %cd%/buildconfig.js 
set /p=请按回车键继续. . .
exit