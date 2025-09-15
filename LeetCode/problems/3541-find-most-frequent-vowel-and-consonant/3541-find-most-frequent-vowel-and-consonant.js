/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let C = new Map();
    let V = new Map();
    for(let chr of s){
        if( /[aeiou]/.test(chr) ){
            V.set(chr, (V.get(chr)|0) + 1)
        }
        else{
            C.set(chr, (C.get(chr)|0) + 1)
        }
    }

    return Math.max(...C.values(),0)+
    Math.max(...V.values(),0);
};
