/**
 * @param {number[]} nums
 * @return {boolean}
 */
var maxSumTrionic = function (nums) {
    let firstPeak = 0;
    let secondPeak = 0;
    let firstValley = 0;
    let secondValley = 0;

    let sum = nums[0];
    let ans = -Infinity;
    for(let I = 1; I<nums.length; I++){
        sum += nums[I];

        if(nums[I-1] == nums[I]){
            firstPeak = I;
            secondPeak = I;
            firstValley = I;
            secondValley = I;
            sum = nums[I];
        }

        //Increasing
        else if(nums[I-1] < nums[I]){
            //previously decreasing
            if(I>1 && nums[I-2] > nums[I-1]){
                secondValley = I-1;
            }
            if(firstValley < firstPeak && firstPeak < secondValley){
                ans = Math.max(ans, sum);
            }
        }

        //Decreasing
        else if(nums[I-1] > nums[I]){
            //Previously increasing
            if(I>1 && nums[I-2] < nums[I-1]){
                firstPeak = I-1;
                
                while(firstValley < secondValley){
                    sum += -nums[firstValley];
                    firstValley++;
                }
                while(firstValley < firstPeak-1 && nums[firstValley] < 0){
                    sum += -nums[firstValley];
                    firstValley++;
                }
                
            }
        }
    }

    return ans;
};
