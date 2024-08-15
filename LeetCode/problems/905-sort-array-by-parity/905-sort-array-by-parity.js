/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {

  let L = 0;
  let R = nums.length-1;

  while(L<R){
    if(nums[L]%2 == 1){
      const temp = nums[L];
      nums[L] = nums[R];
      nums[R] = temp;
      R+=-1;
    }
    else{
      L++;
    }
  }

  return nums;
};