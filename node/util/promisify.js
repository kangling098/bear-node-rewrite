const promisify = (fn)=>{
    return function(...args){
        return new Promise((resolve,reject)=>{
            fn.call(this, ...args,(err,...data)=>{
                if(err) return reject(err);
                resolve(...data)
            })
        })
    }
    
}
let a = 3
module.exports = promisify;
