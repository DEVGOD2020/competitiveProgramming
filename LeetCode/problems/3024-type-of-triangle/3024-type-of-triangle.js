/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
    nums.sort((a,b)=>a-b);
    if(nums[0]+nums[1] <= nums[2]){
        return "none";
    }
    switch(new Set(nums).size){
        case 1:
            return "equilateral"
        case 2:
            return "isosceles"
        case 3:
            return "scalene"
    }
};
