/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let ones = new Set();
    let twos = new Set();

    for(let num of nums){
        if(!ones.has(num) && !twos.has(num)){
            ones.add(num);
        }else{
            if(!twos.has(num)){
                twos.add(num);
                ones.delete(num);
            }
        }
    }

    return [...ones];
    
};