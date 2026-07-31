/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let A = 0;
    let B = 0;
    for(let num of nums){
        if(A<num-1){B=A; A=num-1;}
        else if(B<num-1){B=num-1;}
    }
    return A*B;
};