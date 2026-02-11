/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let need = new Set(_.range(1,nums.length+1));
    let seen = new Set();

    let ans = [0,0];
    for(let num of nums){
        if(!seen.has(num)){
            seen.add(num);
            need.delete(num);
            continue;
        }
        ans[0] = num;
    }
    ans[1] = [...need][0];
    return ans;
};
