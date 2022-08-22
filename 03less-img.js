const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    //如果不谢mode默认为production
    //production生产   development是开发
    mode:"production",
    entry: "./src/main.js", // 入口
    output: { 
        path: path.join(__dirname, "bundle"), // 出口路径
        filename: "bundle.js" ,// 出口文件名
        clean:true, //先清除在从新打包
    },
    //配置loader
    module:{
     rules:[
         //test正则，匹配的文件
         //use：指定匹配上的文件用什么loader
         //重点：style-loader'要写在style-loader'的前面
         //use数组的解析是从后往前执行的
         {
             test:/\.css$/,
             use:['style-loader','css-loader']
         },
         //配置less的rules
         {
             test:/\.less$/,
             use:['style-loader','css-loader','less-loader']
         }
     ]
    },
    //配置项
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
          })
    ],
        devServer: {
            //默认端口号可设置的范围【0，65535】
          port: 3000, // 端口号
          //当serve以后，自动打开默认浏览器运行
          open: true
        }

}