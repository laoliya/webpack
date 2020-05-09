/*
  loader:1.下载，2.使用（配置loader）
  plugins:1.下载，2.引入，3.使用
 */
const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件

module.exports = {
    entry: './src/index.js',
    output: {
        path: resolve(__dirname,'build'),
        filename: 'built.js'
    },
    module:{
        rules: [],
    },
    plugins:[
        //plugins配置   html-webpack-plugins  
        //默认创建一个空的html.自动引入打包后的所有资源
        //复制一个html文件 自动引入打包后的所有资源
        new HtmlWebpackPlugin({template: './src/index.html'})
    ],
    mode:'development'
}