/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let helper = function(num){
        let digits = num.toString().split("").map(Number);
        for(let digit of digits){
            if(num%digit !== 0){
                return false;
            }
        }
        return true;
    }
    let arr = _.range(left,right+1);
    arr = arr.filter( (el)=> !(""+el).includes("0") )
    arr = arr.filter( (el) => helper(el));
    return arr;
};