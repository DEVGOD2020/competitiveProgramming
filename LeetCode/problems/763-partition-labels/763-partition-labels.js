/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let ans = [];
    let partSize = 0;
    let max = 0;
    for(let L = 0; L<s.length; L++){
        max = Math.max(max, s.lastIndexOf(s[L]));
        partSize++;
        if(L === max){
            ans.push(partSize);
            partSize = 0;
        }
    }

    return ans;
};