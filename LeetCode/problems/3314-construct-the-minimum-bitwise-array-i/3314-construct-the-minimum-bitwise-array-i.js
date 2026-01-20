/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function(nums) {
    return nums.map( (el)=>{
        if(el==2){return -1;}
        let I = 1;
        while( (el&I) > 0){
            I *= 2;
        }
        return el - (I/2);
    })
};
