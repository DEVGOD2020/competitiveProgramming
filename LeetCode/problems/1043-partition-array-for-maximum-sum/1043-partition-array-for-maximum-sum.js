/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function(arr, k) {
    //A 1,2,3,4,5,6,7
    //D 1,4,7,12,17,24,31
    
    let dp = [arr[0]];

    for(let Z = 1; Z<arr.length; Z++){
        for(let a = 1; a<arr.length && a<k; a++){
            if(Z-a >= 0){
                dp[Z] = dp[Z-a]+Math.max(...arr.splice(Z-a,Z-1));
            }else{
                
            }
        }
    }

    console.log(dp);

    return 0;

};