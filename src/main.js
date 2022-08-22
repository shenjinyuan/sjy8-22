//按需导入
import {marquee} from './mar.js'
//默认导入
import tabs from './tabs.js'

//函数调用
marquee()
tabs()



import './styles/index.css'
//引入less
import './styles/index.less'



//创建img节点
//给img节点赋值src属性
//将img添加到body的后面


import gifSrc from './assets/1.gif'
const img1 = document.createElement('img')
img1.src = gifSrc
document.body.appendChild(img1)


import pngSrc from './assets/logo_small.png'
const img2 = document.createElement('img')
img2.src = pngSrc
document.body.appendChild(img2)


//引入iconfont
import './assets/fonts/iconfont.css'


class App {
    static a = 123
  }
  
  console.log(App.a)
  import "./style.css";