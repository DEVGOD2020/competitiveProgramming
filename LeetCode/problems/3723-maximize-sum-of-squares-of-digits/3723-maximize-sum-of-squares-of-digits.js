/**
 * @param {number} num
 * @param {number} sum
 * @return {string}
 */
var maxSumOfSquares = function(num, sum) {
    let str = "";
    if(sum > 9*num){return "";}
    while(sum > 9){
        sum += -9;
        str += "9";
    }
    str += (""+sum);
    while(num-str.length > 0){
        str += "0";
    }
    return str;
};