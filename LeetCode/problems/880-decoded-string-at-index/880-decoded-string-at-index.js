/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var decodeAtIndex = function(s, k) {
    let stack = [];

    let str = [];
    let ogStr = [];
    for(let a of s){
        if(str.length >= k){ break; }
        let temp = parseInt(a);
        if(isNaN(temp)){ str.push(a) }
        else{
            ogStr = str;
            for(let I=0; I<temp-1; I++){
                str = str.concat(ogStr);
            }
        }
    }

    return str[k-1];
};