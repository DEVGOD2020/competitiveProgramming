function countSubarraysWithSum(nums, k) {
    let ans = 0;
    let sum = 0;
    let myMap = new Map();
    myMap.set(0,1);
    for(let I = 0; I<nums.length; I++){
        sum += nums[I];
        if(myMap.has(sum-k)){
            ans += myMap.get(sum-k);
        }
        myMap.set(sum, (myMap.get(sum)??0)+1);
    }
    return ans;
}
