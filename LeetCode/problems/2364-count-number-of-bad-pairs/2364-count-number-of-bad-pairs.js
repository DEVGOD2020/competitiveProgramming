/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function(nums) {
    let goodPairs = 0;

    let totalPairs = (nums.length-1)*(nums.length/2);

    let myMap = new Map();
    for(let L = 0; L<nums.length; L++){
        let key = nums[L]-L;
        if( myMap.has(key)){
            goodPairs += myMap.get(key);
            myMap.set(key, myMap.get(key)+1);
        }else{
            myMap.set(key,1);
        }
    }
    return totalPairs-goodPairs;
};