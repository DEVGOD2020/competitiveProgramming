/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let myArr = [];
    let I = 0;
    for(num of arr){
        myArr.push(fn(num,I));
        I= I+1;
    }
    return myArr;
};