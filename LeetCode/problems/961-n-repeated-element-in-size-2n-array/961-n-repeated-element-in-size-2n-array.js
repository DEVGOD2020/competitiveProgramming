/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let mySet = new Set();
    for(let num of nums){
        if(mySet.has(num)){
            return num;
        }
        mySet.add(num);
    }
};
