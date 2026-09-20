function maxDistinctWindowSum(nums, k) {
    let myMap = new Map();
    let sum = 0;
    let ans = 0;
    for(let I = 0; I<nums.length; I++){
        myMap.set(nums[I], (myMap.get(nums[I])??0)+1);
        sum += nums[I];
        if(I>=k){
            myMap.set(nums[I-k], (myMap.get(nums[I-k])??0)-1);
            sum -= nums[I-k];
            if(myMap.get(nums[I-k]) == 0){
                myMap.delete(nums[I-k]);
            }
        }
        if( myMap.size == k){
            ans = Math.max(ans,sum);
        }
    }
    return ans;
}
