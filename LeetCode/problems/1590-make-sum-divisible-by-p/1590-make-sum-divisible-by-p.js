/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */

var minSubarray = function(nums, p) {
    let myMap = new Map();
    myMap.set(0,-1);
    let ans = 10**9;

    let prefix = 0;
    let remainder = _.sumBy(nums)%p;

    if(remainder == 0){return 0;}

    let I = 0;
    for(let num of nums){
        prefix = (prefix+num)%p;

        let target = (prefix - remainder + p) % p;

        console.log(prefix,target);
        if(myMap.has(target)){
            ans = Math.min(ans, I - myMap.get(target));
        }
        myMap.set(prefix, I);
        I++;
    }

    return ans >= nums.length ? -1 : ans;
};