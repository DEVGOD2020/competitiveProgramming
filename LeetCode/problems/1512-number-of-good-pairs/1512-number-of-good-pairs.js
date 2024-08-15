/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let hash = {};
    var a = function(x, sum=0){
        return x*(x-1)/2;
    }

    for(let B of nums){
        if(hash[B] === undefined){hash[B] = 1; }
        else{ hash[B] += 1; }
    }

    let sum = 0;
    for(let B in hash){
        sum += a(hash[B]);
    }

    return sum;
};