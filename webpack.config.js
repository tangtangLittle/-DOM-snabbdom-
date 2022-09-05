// 从https://webpackjs.com官网照着配置
const path = require('path');

module.exports = {
    // 入口
    entry: './src/index.js',
    output: {
        // 虚拟打包路径，就是说文件夹不会真正生成，而是在8080端口虚拟生成
        publicPath: '/xuni/',
        // 打包出来的文件名，不会是真正的物理生成
        filename: 'bundle.js'
    },
    devServer: {
        // 端口号
        port: 8080,
        // 静态资源文件夹
        static: './www'
    },
    mode: 'development'
}