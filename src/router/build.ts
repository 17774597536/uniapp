import * as fs from 'fs'
// import path from "node:path";
import router from './index'
// const fs = uni.requireNativePlugin('uni-plugin-filesystem')
console.log('router',router);
console.log('fs',fs);
let data:any = []
const getRoutePage = (pagePath) =>{
  console.log(pagePath);

  const srcPath = import.meta.glob('../pages/**/*.vue')
  console.log(srcPath);
  const result = fs.readdirSync('',srcPath)
  console.log(result);
  let reg =/[\.]/
  result.forEach(val =>{
    if(reg.test(val)){
      data.push({
        // 页面配置不需要前面的路径
        path: (pagePath + val).slice(3,-4),
        style: {
          navigationBarTitleText: '页面'
        }
      })
    }else{
      getRoutePage(pagePath + val + '/')
    }
  })
  return data
}
router.pages = getRoutePage('../pages/')
// fs.writeFile(
//   __dirname + '/../pages.json',
//   // 我这边是用两个空格来缩进 pages.json，如果喜欢制表符，第三个参数更换你为 \t 即可
//   JSON.stringify(router, null, '  '),
//   e => e ? console.error(e) : console.log('pages.json 配置文件更新成功')
// )
