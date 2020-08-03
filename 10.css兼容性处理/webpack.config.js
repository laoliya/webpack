const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装module.exports = {
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//设置环境变量
// process.env.NODE_ENV = 'development'
module.exports = {
    entry: './src/js/index.js',   //入口 
    output: {  //出口
        path: resolve(__dirname,'build'),
        filename: 'js/built.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,   //匹配那些文件
                use: [ 
                    MiniCssExtractPlugin.loader, //取代css,loader会将css提取成单独的文件 
                    // 'style-loader',  //创建style标签 ，将js中的样式资源插入进行，添加到head中生效
                    'css-loader',   //将css文件变成commonJs模块加载js中，里面内容是样式字符串
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: ()=>[
                                require('postcss-preset-env')()
                            ]
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        //plugins配置   html-webpack-plugins  
       //默认创建一个空的html.自动引入打包后的所有资源
       //复制一个html文件 自动引入打包后的所有资源
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new MiniCssExtractPlugin({
            filename: 'css/built.css' //对输出的css文件进行重命名
        }),
    ],
    mode: 'development'
}