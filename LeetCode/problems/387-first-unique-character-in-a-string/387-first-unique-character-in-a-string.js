/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let hash = {};
    for(let chr of s){
        if(hash[chr] === undefined){hash[chr] = 0;}
        hash[chr]++;
    }

    for(let a of Object.keys(hash)){
        if(hash[a] === 1){
            return s.indexOf(a);
        }
    }

    return -1;
};