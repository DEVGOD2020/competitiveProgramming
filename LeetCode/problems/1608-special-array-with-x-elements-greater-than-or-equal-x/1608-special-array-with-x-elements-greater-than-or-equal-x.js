/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    nums.sort(function(a,b){return a-b;});

    function binarySearch(nums, val){
        let left = 0;
        let right = nums.length-1;

        let index = nums.length;
        while(left<=right){
            let mid = Math.floor( (left+right)/2);

            if(nums[mid] >= val){
                index = mid;
                right = mid-1;
            }else{
                left = mid+1;
            }
        }
        return index;
    }

    console.log(binarySearch(nums,0));
    console.log(binarySearch(nums,6));
    for(let I = 1; I<=nums.length; I++){
        if(nums.length - binarySearch(nums,I) === I){
            return I;
        }
    }
    return -1;
};