/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let dp = new Array(ratings.length).fill(1);

    for(let I = 1; I<ratings.length; I++){
        if(ratings[I] > ratings[I-1]){
            dp[I] = dp[I-1]+1;
        }
    }

    for(let I = ratings.length-2; I>=0; I--){
        if(ratings[I] > ratings[I+1]){
            dp[I] = Math.max(dp[I], dp[I+1]+1);
        }
    }

    return _.sumBy(dp);
};
