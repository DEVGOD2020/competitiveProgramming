/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let myStr = '';
    for(let chr of s){
        myStr += chr.charCodeAt(0)-96;
    }
    
    for(let I = 0; I<k; I++){
        let sum = _.sum(myStr.split("").map( (el) => parseInt(el) ) );
        myStr = ""+sum;
    }

    return myStr
};