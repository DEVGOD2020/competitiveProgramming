/**
 * @param {number[]} nums
 * @return {number}
 */

var memo = {};
let rob = function(nums){
    let Max=0;
    memo = [];
    let I = 0;
    while(I<nums.length){
        let value = robDP(nums,I);
        if( value > Max){
            Max = value;
        }
        I++;
    }
    return Max;
}

let robDP = function(nums, X=0) {
    if(memo[X] !== undefined){
        return memo[X];
    }else{
        if(X == nums.length-1){return nums[X];}
        if(X == nums.length-2){return nums[X];}
        
        let I = X+2;
        let max = 0;
        while(I<nums.length){
            let value = robDP(nums,I);
            if(value > max){
                max = value;
            }
            I++;
        }

        memo[X] = max+nums[X];
        return memo[X];
    }
};
