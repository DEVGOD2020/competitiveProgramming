/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let arr = [];
    let score = 0;
    for(let chr of s){
        if(chr==="(" && score > 0){arr.push("(");}
        else if(score > 1){arr.push(")");}
        score += (chr==="(") ? 1 : -1;
    }
    return arr.join("");
};
