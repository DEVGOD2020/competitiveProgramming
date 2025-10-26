/**
 * @param {number[]} nums
 * @param {number} value
 * @return {number}
 */
var findSmallestInteger = function(nums, value) {
    let freqs = new Array(value).fill(0);

    for(let num of nums){
        freqs[ ((num%value)+value)%value ]++;
    }

    let ans = [Infinity,Infinity];
    for(let I = 0; I<freqs.length; I++){
        if( ans[1] > freqs[I]){
            ans = [ I,freqs[I] ];
        }
    }

    return ans[0] + ans[1]*value;
};
