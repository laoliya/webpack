

const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 用于访问内置插件
module.exports = {
    entry: './src/index.js',
    output: {
        path: resolve(__dirname,'build'),
        filename: 'built.js'
    },
    module:{
        rules: [
            {
                test: /\.less$/,
                //使用多个loader用use
                use:[
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                //处理图片资源
                test: /\.(jpg|png|gif)$/,
                // 使用一个用loader
                loader: 'url-loader',   //下载url-loader file-loader
                options: {
                    //图片小于8KB会被base64处理
                    limit: 8*1024,
                    //问题：因为url-loader默认使用es6模块化解析，而html-loader引入图片是commonJs
                    //关闭url-loader的es6模块化使用commonJs
                    esMoudle: false,
                    name: '[hash:10].[ext]' //图片重命名，[hash:10]去图片hash前十位，[ext]取文件原来扩展名
                }
            },
            {
                test: /\.html$/,
                //处理html中引入的img （负责引入被uel-loader处理）
                loader:'html-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
    ],
    mode: 'development'
}