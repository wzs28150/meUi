@echo off
echo ��ӭʹ��wzs��վjsģ��������
echo ��ǰ������ȫ·��Ŀ¼��%cd% 
set /p=�밴�س�������. . .
node %cd%/r.js  -o %cd%/buildconfig.js 
set /p=�밴�س�������. . .
exit