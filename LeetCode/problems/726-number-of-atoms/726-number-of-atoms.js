/**
 * @param {string} formula
 * @return {string}
 */

function isLowercase(chr) {
  return chr >= 'a' && chr <= 'z';
}

function isNumber(chr) {
  return chr >= '0' && chr <= '9';
}

var countOfAtoms = function(formula) {
    let freqMap = new Map();
    let stack = [];
    let chem = "";
    for(let chr of formula){
        chem += chr;
    }
};