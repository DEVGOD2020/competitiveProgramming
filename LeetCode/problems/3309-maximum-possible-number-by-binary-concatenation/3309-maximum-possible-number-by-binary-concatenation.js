/**
 * @param {number[]} nums
 * @return {number}
 */
var maxGoodNumber = function(nums) {
    let binArr = nums.map( (el) => el.toString(2));
    let custom = function(a,b){
        if(a+b > b+a){
            return -1;
        }
        return 1;
    }
    return parseInt(binArr.sort(custom).join(""),2);
};