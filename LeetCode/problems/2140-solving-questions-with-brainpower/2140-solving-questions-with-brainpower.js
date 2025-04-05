/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function(questions) {
    let dp = Array(200000+1).fill(0);

    for(let I = questions.length-1; I>=0; I--){
        let [score,jump] = questions[I];
        let next = I+jump+1;

        let solve = score + (dp[next]);
        let skip = dp[I+1];

        dp[I] = Math.max(solve,skip)
    }

    return dp[0];
};