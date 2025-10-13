/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    let ans = [words[0]];
    for(let I = 1; I<words.length; I++){
        let key1 = words[I-1].split('').sort().join('');
        let key2 = words[I].split('').sort().join('');
        if(key1 !== key2){ans.push(words[I]);}
    }
    return ans;
};
