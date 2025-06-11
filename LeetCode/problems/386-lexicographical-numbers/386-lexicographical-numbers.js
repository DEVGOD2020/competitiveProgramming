/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    let ans = [];
    let score = 1;
    for(let I = 0; I<n; I++){
        ans.push(score);
        if(score*10 <= n){
            score *= 10;
        }else{
            while(score%10 === 9 || score >= n){
                score = Math.floor(score/10)
            }
            score++;
        }
    }
    return ans;
};
