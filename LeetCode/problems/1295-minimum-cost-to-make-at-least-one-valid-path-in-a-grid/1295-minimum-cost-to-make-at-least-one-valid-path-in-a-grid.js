/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let isEven = function(num){
        let count = 0;
        while(num > 0){
            num = Math.floor(num/10);
            count++;
        }
        return count%2 == 0;
    }

    return nums.filter( (el)=>isEven(el)).length;
};