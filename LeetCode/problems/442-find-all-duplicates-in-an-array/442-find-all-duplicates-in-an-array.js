/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let mySet = new Set();
    let dupSet = new Set();
    for(let num of nums){
        if(!mySet.has(num)){
            mySet.add(num);
        }else{
            dupSet.add(num);
            mySet.delete(num);
        }
    }

    return [...dupSet];
};