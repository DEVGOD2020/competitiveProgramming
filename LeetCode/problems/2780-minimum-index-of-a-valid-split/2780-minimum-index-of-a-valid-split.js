/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumIndex = function(nums) {
    const highest = _.toPairs(
        _.countBy(nums)
    ).sort((a,b)=>b[1]-a[1])[0];

    const X = highest[0];

    let suffix = highest[1];
    let prefix = 0;
    
    for(let I = 0; I<nums.length-1; I++){
        prefix += nums[I]==X ? 1 : 0;
        suffix += nums[I]==X ? -1 : 0;

        let leftSize = I+1;
        let rightSize = nums.length-(I+1);

        if(prefix/leftSize > 0.5 && suffix/rightSize > 0.5){
            return I;
        }
    }

    return -1;
};