/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let mySet = new Set();
    let ans = [];
    for(let num of nums){
        if(mySet.has(num)){
            ans.push(num);
        }
        mySet.add(num);
    }
    return ans;
};
