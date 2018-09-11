const promisify = require('./promisify');
const inherits = require('./inherits');

module.exports = {
    promisify,
    inherits
}

// 思路 螺旋遍历 只考虑 n^2形式的数组
const traverse = (A,n) => { 
    // 可知螺旋循环有如下规律 第一次延n*n正方形的上边遍历 n个数据 
    // 之后以顺时针顺序,每两轮遍历上一轮遍历数据个数n-1,直到 n=0结束遍历
    const arr = [];
    const time = 2*n - 1; //设置循环次数
    for( i = 1,j=0 ,o =n ;i <= time; i++){
        if(i ===1 ){
            let k = 0;
            while(k<o){
                arr.push(A[j+k++]);
            }
            j += (k-1) ; // 更新j的值
            o-=1; // 减少一次单次内部循环的个数
        }else{
            if(i % 4 == 1){
                let k = 1;
                while(k<=o){
                    arr.push(A[j+k++]);
                }
                j += (k-1) ; // 更新j的值
                o-=1; // 减少一次单次内部循环的个数
            }
            if(i % 4 == 2){
                let k = 1
                while(k<=o){
                    arr.push(A[j+n*k++]);
                }
                j += (k-1)*n;  ; // 更新j的值
            }
            if(i % 4 == 3){
                let k = 1
                while(k<=o){
                    arr.push(A[j-k++]);
                }
                j -= (k-1); // 更新j的值
                o-=1; // 减少一次单次内部循环的个数
            }
            if(i % 4 == 0){
                let k = 1
                while(k<=o){
                    arr.push(A[j-n*k++]);
                }
                j -= (k-1)*n; // 更新j的值
            }
        }
        
    }
    return arr;
}
console.log(traverse([1,2,3,4,5,6,7,8,9], 3))// [1,2,3,6,9,8,7,4,5])
console.log(traverse([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 4))