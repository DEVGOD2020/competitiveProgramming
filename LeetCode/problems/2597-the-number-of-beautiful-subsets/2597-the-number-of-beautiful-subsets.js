/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function (nums, k) {
    //Why does order matter?
    //WHy does unsorted lead to false positives?
    nums.sort(function(a,b){return a-b;})
    let score = 0;
    for (let val = 1; val < (1 << nums.length); val++) {
        let subset = new Set();
        score++;
        for (let I = 0; I < nums.length; I++) {
            if((val>>I)&1 == 1){
                if(!subset.has(nums[I] - k)){
                    subset.add(nums[I]);
                }else{
                    score--;
                    break;
                }
            }
        }
    }
    return score;
};