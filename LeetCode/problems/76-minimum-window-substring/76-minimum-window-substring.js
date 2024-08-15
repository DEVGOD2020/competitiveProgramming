/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let minStr = "";
    let maxStr = "";
    if(s.length > t.length){minStr = t; maxStr = s}
    else{minStr = s; maxStr = t}

    let minStrMap = new Map();
    for(let chr of minStr){
        minStrMap.set( chr, (minStrMap.get(chr)||0)+1)
    }

    let myMap = new Map();

    console.log(minStrMap);
    
};