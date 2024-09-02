/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    const answer = Array(s.length).fill(Infinity);
    let leftSum = Infinity, rightSum = Infinity;
    
    for(let L = 0; L < s.length; L++) {
        const R = s.length-1-L;
        
        leftSum = s[L] === c ? 0 : leftSum+1;
        rightSum = s[R] === c ? 0 : rightSum+1;
        
        answer[L] = Math.min(answer[L], leftSum);
        answer[R] = Math.min(answer[R], rightSum);
    }
    return answer;    
};