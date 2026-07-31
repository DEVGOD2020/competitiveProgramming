/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    let arr = new Array(26).fill(0);
    for(let chr of word){
        arr[ chr.charCodeAt(0)-97]++;
    }
    arr.sort((a,b)=>b-a);
    return arr.reduce( (sum,el,I)=>sum+(el*Math.floor((I/8)+1)),0 )
};