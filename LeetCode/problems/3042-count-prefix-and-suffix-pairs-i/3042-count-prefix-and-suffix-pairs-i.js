/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {
    let ans = 0;

    function isPrefixAndSuffix(str1, str2){
        if( str1.length <= str2.length){
            let prefix = str2.substring(0,str1.length);
            let suffix = str2.substring(str2.length-str1.length,str2.length);
            if( prefix === str1 && suffix === str1){
                return true;
            }
        }
        return false;
    }

    for(let I = 0; I<words.length; I++){
        for(let A = I+1; A<words.length; A++){
            if(isPrefixAndSuffix(words[I],words[A])){
                ans++;
            }
        }
    }

    return ans;
};