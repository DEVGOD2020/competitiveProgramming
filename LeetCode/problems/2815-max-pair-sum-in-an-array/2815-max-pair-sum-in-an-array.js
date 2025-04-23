/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
    
    let maxDigit = function(N){
        let maxD = N%10;
        while(N){
            maxD = Math.max(N%10, maxD);
            N = Math.floor(N/10);
        }
        return maxD
    }

    let arr = new Array(10).fill(-1);
    let ans = -1;
    for(let num of nums){
        let maxD = maxDigit(num);
        if(arr[maxD] === -1){
            arr[maxD] = num;
        }else{
            ans = Math.max(ans, num+arr[maxD]);
            arr[maxD] = Math.max(arr[maxD], num);
        }
    }

    return ans;
};