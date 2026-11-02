function twoSum(nums, target) {
    let myMap = new Map();
    for(let I = 0; I<nums.length; I++){
        if(myMap.has( target-nums[I] )){
            return [myMap.get(target-nums[I]),I ];
        }
        myMap.set(nums[I],I);
    }
    return -1;
}