/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let myMap = new Map();
    let ans = 0;
    for(let num of nums){
        if(myMap.has(num)){ continue; }
        let left = myMap.get(num-1)??0;
        let right = myMap.get(num+1)??0;
        let score = left+1+right;
        myMap.set(num,0);
        myMap.set(num-left,score);
        myMap.set(num+right,score);
        ans = Math.max(ans,score);
    }
    return ans;
};
