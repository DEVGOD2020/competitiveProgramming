function maxSubArray(nums) {
    let curr = 0;
    let max = -Infinity;
    for(let num of nums){
        curr = Math.max(curr+num, num);
        max = Math.max(curr, max);
    }
    return max;
}
