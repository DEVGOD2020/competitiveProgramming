/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let arr = [];
    for(let chr of s){
        if(chr !== arr[arr.length-1]){
            arr.push(chr);
        }else{
            arr.pop();
        }
    }
    return arr.join("");
};
