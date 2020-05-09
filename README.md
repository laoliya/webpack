# webpack
npm init      ->初始化，输完命令在起个name
npm i webpack webpack-cli -g   ->全局安装wepack脚手架
npm i webpack webpack-cli -D   -> 安装到开发环境
 webpack ./src/index.js -o ./build/built.js --mode=development   ->以src先的index.js为入口文件输出到/build/built.js进行dev开发环境打包
webpack ./src/index.js -o ./build/built.js --mode=production   ->  会以 .src/index.js 为入口文件开始打包，打包后输出到./build/builts.js  整体打包环境为生产环境，
2.结论:1.webpack能处理js/json资源，不能处理css/img等其他资源
2.生产环境和开发环境将ES6模块化编译成浏览器能识别的
3.生产环境比开发多一个压缩代码;;

处理css文件需要下载 npm i css-loader -D npm i style-loader -D 
处理less文件同上下载后还需要多一个npm i less-loader -D 

处理 html 需要使用插件 npm i html-webpack-plugin -D