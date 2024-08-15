/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    let hash = {};
    hash[0] = 0;
    hash[1] = 0;
    for(let chr of s){
        if(chr === '0'){
            hash[0]++;
        }
        if(chr === '1'){
            hash[1]++;
        }
    }

    let str = "";
    while(hash[1]-1 > 0){
        str += "1";
        hash[1] += -1;
    }

    while(hash[0] > 0){
        str += "0";
        hash[0] += -1;
    }

    str += "1";

    return str;
};