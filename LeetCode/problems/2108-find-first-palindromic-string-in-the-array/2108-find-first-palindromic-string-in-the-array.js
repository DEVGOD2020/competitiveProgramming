/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(const word of words){
        if(word.length === 1){return word};
        let L = 0;
        let R = word.length-1;
        while(L<R){
            if(word[L] !== word[R]){break;}
            L++; R+=-1;
            if(L==Math.floor(word.length/2)){
                return word
            }
        }
    }
    return "";
};