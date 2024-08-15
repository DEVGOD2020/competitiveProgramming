/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 var sortColors = function(nums) {
    let low = 0, mid = 0, high = nums.length - 1;
    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
};

var sortColors2 = function(nums) {
    let myMap = new Map();
    for(let num of nums){
        if(!myMap.has(num)){
            myMap.set(num,0);
        }
        myMap.set(num, myMap.get(num)+1);
    }

    let I = 0;
    while(myMap.get(0) > 0){
        nums[I] = 0;
        myMap.set(0, myMap.get(0)-1);
        I++;
    }
    while(myMap.get(1) > 0){
        nums[I] = 1;
        myMap.set(1, myMap.get(1)-1);
        I++;
    }
    while(myMap.get(2) > 0){
        nums[I] = 2;
        myMap.set(2, myMap.get(2)-1);
        I++;
    }
};