/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    const size = nums.filter( (el)=>{return el == 1}).length;

    let L = 0;
    let R = size;
    let zeroCount = nums.slice(L,R).filter( (el)=>{return el == 0}).length;
    let oneCount = nums.slice(L,R).filter( (el)=>{return el == 1}).length;
    
    let score = Infinity;
    while(R<nums.length+size){
        score = Math.min(score, zeroCount);
        if(nums[L%nums.length] == 0){ zeroCount--;}
        else{ oneCount--;}
        if(nums[R%nums.length] == 0){ zeroCount++;}
        else{ oneCount++;}
        L++;
        R++;
    }

    return score;
};