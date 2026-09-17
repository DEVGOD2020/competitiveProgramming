function countDivisibleSubarrays(nums) {
    const N = nums.length;
    let ans = 0;
    let sum = 0;
    let myMap = new Map();
    myMap.set(0,1);
    for(let I = 0; I<N; I++){
        sum += nums[I];
        sum = ((sum%N)+N)%N;
        if(myMap.has(sum%N)){
            ans += myMap.get(sum%N);
        }
        myMap.set(sum%N, (myMap.get(sum%N)??0)+1);
    }
    return ans;
}
