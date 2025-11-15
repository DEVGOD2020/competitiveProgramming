/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let arr = [];
    let score = 0;
    for(let num of nums){
        while( arr.length && arr[arr.length-1] > num){
            arr.pop();
        }
        if(num === 0){continue;}
        if( arr.length <= 0 || arr[arr.length-1] < num){
            score++;
            arr.push(num);
        }
    }
    return score;
};
