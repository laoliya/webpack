
/*
    index.js: webpack入口文件

    1。运行命令 webpack ./src/index.js -o ./build/built.js --mode=development    
    webpack 会以 .src/index.js 为入口文件开始打包，打包后输出到./build/builts.js  整体打包环境为开发环境，
    生产环境：运行命令 webpack ./src/index.js -o ./build/built.js --mode=production
       webpack 会以 .src/index.js 为入口文件开始打包，打包后输出到./build/builts.js  整体打包环境为生产环境，

       2.结论:1.webpack能处理js/json资源，不能处理css/img等其他资源
             2.生产环境和开发环境将ES6模块化编译成浏览器能识别的模块化
             3.生产环境比开发多一个压缩代码
 */
// import './index.css'
import data from './data.json';
console.log(data);

function add(x,y){
    return x+y
} 
console.log(add(1,2));
