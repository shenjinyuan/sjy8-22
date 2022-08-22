const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    //如果不谢mode默认为production
    //production生产   development是开发
    mode:"development",
    entry: "./src/main.js", // 入口
    output: { 
        path: path.join(__dirname, "bundle"), // 出口路径
        filename: "bundle.js" ,// 出口文件名
        clean:true, //先清除在从新打包
    },
    //配置项
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
          })
    ]
}