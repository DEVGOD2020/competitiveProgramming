/**
 * @param {number} n
 * @return {string}
 */

var memo = ["1","11","21","1211"];
var countAndSay = function(n) {

    if(memo[n-1]){ return memo[n-1]; }
    else if(!memo[n-2]){
        memo[n-2] = countAndSay(n-1);
    }

    return helper(memo[n-2]);
};

function helper(str){
    let arr = "";
    let score = 1;
    let curChar = str[0];
    for(let I=1; I<str.length; I++){
        if(str[I] !== curChar){
            arr += score+""+curChar;
            score=1; curChar = str[I];
        }else{ score++; }
    }
    arr += score+""+curChar;
    return arr;
}