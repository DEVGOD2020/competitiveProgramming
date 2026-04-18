/**
 * @param {number[]} nums
 * @return {number}
 */
var minMirrorPairDistance = function(nums) {
    let rev = function(num){
        let ans = 0;
        while(num>0){
            ans = (10*ans)+num%10;
            num = Math.floor(num/10);
        }
        return ans;
    }

    let ans = nums.length+1;
    let myMap = new Map();
    for(let I = 0; I<nums.length; I++){
        if(!myMap.has( nums[I] ) ){
            myMap.set( rev(nums[I]),I); continue;
        }
        ans = Math.min(ans, I - myMap.get(nums[I]) );
        myMap.set( rev(nums[I]),I);
    }
    return (ans==nums.length+1)?-1:ans;
};
