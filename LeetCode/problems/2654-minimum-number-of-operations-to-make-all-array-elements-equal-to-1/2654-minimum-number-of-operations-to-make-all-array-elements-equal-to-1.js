/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let GCD = function(A,B){
        if(A == 0 || B == 0){return Math.max(A,B);}
        return GCD(B%A,A);
    }
    let num1 = 0;
    let G = 0;
    for(let I = 0; I<nums.length; I++){
        if(nums[I] == 1){num1++;}
        G = GCD(G,nums[I]);
    }

    if(num1 > 0){return nums.length - num1;}
    if(G > 1){return -1;}

    let ans = nums.length;
    for(let L = 0; L<nums.length; L++){
        G = 0;
        for(let R = L; R<nums.length; R++){
            G = GCD(G,nums[R]);
            if(G==1){
                ans = Math.min(ans, R-L+1);
            }
        }
    }

    return (ans-1) + (nums.length-1);

};
