/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let I = num.length-1;
    while(parseInt(num[I])%2==0){
        num = num.slice(0,I);
        I+=-1;
    }
    return num;
};