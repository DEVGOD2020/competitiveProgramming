/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function(nums, k) {
    let ans = [];
    let windowScore = 1;
    for(let I = 0; I<k-1; I++){
        if(nums[I] == nums[I+1]-1){
            windowScore++;
        }else{
            windowScore--;
        }
    }

    if(windowScore == k){
        ans.push(nums[k-1]);
    }else{
        ans.push(-1);
    }

    L = 1;
    let R = L+k-1;
    while(R<nums.length){
        if(nums[R] === nums[R-1]+1){windowScore++;}
        else{windowScore--;}
        if(nums[L-1] === nums[L]-1){windowScore--;}
        else{windowScore++;}
        if(windowScore == k){
            ans.push(nums[R]);
        }else{
            ans.push(-1);
        }
        L++;
        R++;
    }

    return ans;
};