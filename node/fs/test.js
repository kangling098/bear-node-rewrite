const fs = require('fs');
const path = require('path');
// fs.writeFile(path.join(__dirname,'b.txt'),Buffer.from('小可爱'),{flag:'a',mode:0o222},(err,data)=>{
//     if(err) return console.log(err);
//     console.log('写入成功')
// })
// fs.readFile(path.join(__dirname,'test.js'),'utf8',(err,data)=>{
//     if(err) return console.log(err)
//     console.log(data)
// })

fs.copyFile(path.join(__dirname,'b.txt'),path.join(__dirname,'a.txt'),(err,data)=>{
    if(err) return console.log(err)
    console.log(data)
})