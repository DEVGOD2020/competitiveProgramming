/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let hash1 = {};
    let hash2 = {};

    for(let a of s){
        if(hash1[a] == undefined){ hash1[a] = []; }
        hash1[a]++;
    }

    for(let a of t){
        if(hash2[a] == undefined){ hash2[a] = []; }
        hash2[a]++;
    }

    for(let a of t){
        if(hash1[a] != hash2[a]){ return a; }
    }
    
};