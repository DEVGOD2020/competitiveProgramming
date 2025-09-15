/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
var spellchecker = function(wordlist, queries) {
    let myMap = new Map();
    let mySet = new Set();
    for(let word of wordlist){
        let key = word.replace(/[aeiouAEIOU]/g,'*').toLowerCase();
        let lWord = word.toLowerCase();
        if(!myMap.has(key)){
            myMap.set(key, word);
        }
        if(!myMap.has( lWord )){
            myMap.set( lWord , word);
        }
        mySet.add(word);
    }

    let ans = [];
    for(let word of queries){
        let key = word.replace(/[aeiouAEIOU]/g,'*').toLowerCase();
        let lWord = word.toLowerCase();
        if( mySet.has(word) ){ans.push( word );}
        else if(myMap.has(lWord)){ans.push( myMap.get(lWord) );}
        else if(myMap.has(key)){ans.push( myMap.get(key) );}
        else{ ans.push(""); }
    }
    return ans;
};
