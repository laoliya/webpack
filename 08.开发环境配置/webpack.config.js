/* 
    开发环境配置，让代码可以跑起来
*/

const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
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
                    'style-loader',  //创建style标签 ，将js中的样式资源插入进行，添加到head中生效
                    'css-loader'   //将css文件变成commonJs模块加载js中，里面内容是样式字符串
                ]
            },
            {
                test: /\.less$/,   //匹配那些文件
                use: [ 
                    'style-loader',  //创建style标签 ，将js中的样式资源插入进行，添加到head中生效
                    'css-loader',   //将css文件变成commonJs模块加载js中，里面内容是样式字符串
                    //需要下载less-loader和less
                    'less-loader'  //将less文件编译成css文件
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
                    name: '[hash:10].[ext]', //图片重命名，[hash:10]去图片hash前十位，[ext]取文件原来扩展名
                    outputPath: 'imgs'  //输出路径
                }
            },
            {
                test: /\.html$/,
                //处理html中引入的img （负责引入被uel-loader处理）
                loader:'html-loader',
            },
             //打包其它资源（除css.js.html之外的资源）
             {
                exclude: /\.(less|css|html|js|jpg|png|gif)$/,   //排除css/js/html资源
                loader: 'file-loader',
                options: {
                    name: '[hash:10].[ext]',
                    outputPath: 'media'  //输出路径
                }
            },

        ],
    },
    plugins: [
         //plugins配置   html-webpack-plugins  
        //默认创建一个空的html.自动引入打包后的所有资源
        //复制一个html文件 自动引入打包后的所有资源
        new HtmlWebpackPlugin({template: './src/index.html'})
    ],

    mode: 'development',
    //开发服务器 devServer,用来自动化（自动编译，自动打开浏览器，自动刷新浏览器）
    //特点：只会在内存中编译打包，不会有任何输出
    //启动命令 npx webpack-dev-serverW
    devServer: {
        contentBase: resolve(__dirname, 'build'),
        compress: true, // 启动gzip压缩
        port: 3001, // 端口号
        open: true, //自动打开浏览器
    }
  };