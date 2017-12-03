# JS-Sudoku
### 一个简单的数独小游戏，基于慕课网《从JS到TS开发数独游戏——JS版》，有部分修改

## 需要：Node / Gulp

## 与慕课网不同的地方
1. 不再使用less与gulp less功能，而采用CSS直接编写的方式（但less文件依然存在）
2. 编译采用版本为Node v8.7.0 与 npm v5.4.2

## 使用方法
1. Clone这个项目或下载这个项目
2. 使用npm install / npm install gulp安装
3. 使用gulp进行编译

## 测试方法
项目地址：/www/index.html

## 目前存在的问题
1. npm5.x导致的数组栈溢出问题
2. gulp less无法使用的问题

## 解决方法（可能的）
1. 使用npm3.x版本或进行手动降级
2. 使用stylus或直接使用CSS