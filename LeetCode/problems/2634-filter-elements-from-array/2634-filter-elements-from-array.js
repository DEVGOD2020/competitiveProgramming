/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var filter = function(arr, fn) {
    let myArr = [];
    let I = 0;
    for(num of arr){
        if(fn(num, I)){
            myArr.push(num);
        }
        I++;
    }
    return myArr;
};
