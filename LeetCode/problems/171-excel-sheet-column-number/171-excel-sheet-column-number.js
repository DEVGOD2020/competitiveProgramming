/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let R = columnTitle.length-1;
    let val = 0;
    let carry = 1;
    

    while(R>=0){
        val += carry*(columnTitle.charCodeAt(R)-64);
        R += -1;
        carry *= 26;
    }

    return val;
};