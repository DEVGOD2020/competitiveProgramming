/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let ans = [];

    let helper = function(open=n-1,close=n,result="("){
        if(result.length >= n*2){
            ans.push(result);
            return 1;
        }
        if(open > close){
            return 0;
        }
        if(open > 0){
            helper(open-1,close,result+"(");
        }
        if(close > 0){
            helper(open,close-1,result+")");
        }
    }

    helper();
    return ans;
};