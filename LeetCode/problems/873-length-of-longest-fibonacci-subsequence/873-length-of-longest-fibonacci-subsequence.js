/**
 * @param {number[]} arr
 * @return {number}
 */
var lenLongestFibSubseq = function(arr) {
    let dp = Array.from({length:arr.length},()=> new Array(arr.length).fill(0));
    let score = 0;

    for(let current = 2; current<arr.length; current++){
        let left = 0;
        let right = current-1;

        while(left<right){
            let sum = arr[left] + arr[right];
            if(sum > arr[current]){
                right--;
            }
            else if(sum < arr[current]){
                left++;
            }
            else{
                dp[right][current] = dp[left][right]+1;
                score = Math.max(dp[right][current], score);
                right--;
                left++;
            }
        }
    }

    return score > 0 ? score+2 : 0;
};