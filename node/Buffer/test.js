const path = require('path');
const fs = require('fs');
const iconvLite = require('iconv-lite');
let result = fs.readFileSync(path.resolve(__dirname, 'a.txt'))
result = iconvLite.decode(result, 'gbk')
console.log(result)

// 将unicode编码转化为 utf8格式
const reansfer = code => {
    let arr = [1100, 10, 10];
    codeStr = code.toString(2);
    arr[0] += codeStr.slice(0, -12).padStart(4, 0);
    arr[1] += codeStr.slice(-12, -6)
    arr[2] += codeStr.slice(-6)
    arr = arr.map(val => parseInt(val, 2));
    return Buffer.from(arr).toString()
}

console.log(reansfer(0x73E0))

let buffer = Buffer.from('小鸟云');
console.log(buffer.length)
let a = buffer.slice(0, 2);
let b = buffer.slice(2, 6);
let {
    StringDecoder
} = require('string_decoder')
let sd = new StringDecoder();
console.log(sd.write(a));
console.log(sd.write(b));
