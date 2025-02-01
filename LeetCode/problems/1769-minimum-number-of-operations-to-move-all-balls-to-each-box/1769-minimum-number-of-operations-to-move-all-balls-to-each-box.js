/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    let ans = new Array(boxes.length).fill(0);

    let prefix = 0;
    let prefix2 = 0;
    for(let L = 0; L<boxes.length; L++){
        ans[L] += prefix2;
        prefix += parseInt(boxes[L]);
        prefix2 += prefix;
    }

    prefix = 0;
    prefix2 = 0;
    for(let R = boxes.length-1; R>=0; R--){
        ans[R] += prefix2;
        prefix += parseInt(boxes[R]);
        prefix2 += prefix;
    }

    return ans;
};