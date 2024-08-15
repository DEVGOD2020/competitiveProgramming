/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    
    let expandFromCenter = function(L,R){
        while(L >= 0 && R <= s.length && s[L] === s[R]){
            L--;
            R++;
        }
        return s.slice(L+1,R);
    }

    let maxPal = '';
    for(let I = 0; I<s.length; I++){
        const odd = expandFromCenter(I,I);
        const even = expandFromCenter(I,I+1);
        let newPal = odd.length > even.length ? odd : even;
        maxPal = maxPal.length > newPal.length ? maxPal : newPal;
    }

    return maxPal;
};