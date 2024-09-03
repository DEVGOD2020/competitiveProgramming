/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var stringHash = function(s, k) {
    let chunked = _.chunk(s.split(""),k);
    let str = "";
    for(let I = 0; I<chunked.length; I++){
        let chunk = chunked[I];
        let score = 0;
        for(let el of chunk){
            score += el.charCodeAt(0)-97;
        }
        str += String.fromCharCode(score%26 + 97);
    }
    return str;
};