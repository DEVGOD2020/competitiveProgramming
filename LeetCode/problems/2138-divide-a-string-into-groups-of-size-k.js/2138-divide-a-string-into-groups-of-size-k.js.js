/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
    let chunk = _.chunk(s, k);
    while(chunk[chunk.length-1].length < k){
        chunk[chunk.length-1].push(fill);
    }
    return chunk.map( (el)=> el.join(""));
};
