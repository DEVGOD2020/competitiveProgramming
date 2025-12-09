/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let arr = s.split("");
    for(let I = 0; I<s.length; I++){
        arr[ indices[I] ] = s[ I ];
    }
    return arr.join('');
};
