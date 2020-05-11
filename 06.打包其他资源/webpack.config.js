const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
module.exports = {
    entry: './src/index.js',
    output:{
        path: resolve(__dirname,'build'),
        filename: 'built.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,   //匹配那些文件
                use: [ 
                    'style-loader',  //创建style标签 ，将js中的样式资源插入进行，添加到head中生效
                    'css-loader'   //将css文件变成commonJs模块加载js中，里面内容是样式字符串
                ],
            },
            //打包其它资源（除css.js.html之外的资源）
            {
                exclude: /\.(css|html|js)$/,   //排除css/js/html资源
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]'
                }
            },
            
        ],
    },
    plugins: [
       new HtmlWebpackPlugin({
           template: './src/index.html'
       })
    ],
    mode: 'development',

}