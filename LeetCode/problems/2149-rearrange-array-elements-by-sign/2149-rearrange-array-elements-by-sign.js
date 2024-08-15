/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    
    let pos = [];
    let neg = [];
    for(let el of nums){
        if(el > 0){pos.push(el);}else{neg.push(el);}
    }

    let L = 0;
    let R = 0;
    let I = 0;
    let sign = 1;
    while(I < nums.length){
        if(sign > 0){nums[I] = pos[L]; L++;}
        if(sign < 0){nums[I] = neg[R]; R++;}
        I++;
        sign = sign*-1;
    }

    return nums;
};