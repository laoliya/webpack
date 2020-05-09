/*
    webpack.config.js webpack的配置文件
    作用：指示webpack干那些活
    所有的构建工具都是基于node.js平台运行的~模块化默认采用commonJS
*/
const { resolve } = require('path');

module.exports = {
    //webpack配置
    //入口起点
    entry: './src/index.js',
    //输出
    output: {
        //输出文件名
        filename: 'built.js',
        //输出路径
        //__dirname,nodeJS的变量，代表当前文件的绝对路径
        path: resolve(__dirname, 'build')
    },
    //loader配置
    module: {
        //详细loader配置
        //不同的文件需要不同的loader
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
            }
        ],
    },
    //插件
    plugins: [],
    //模式 production生产development开发
    mode: 'development'
}