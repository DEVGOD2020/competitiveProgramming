/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let L = 0;
    let R = k;

    const vowelRE = /[aeiou]/i;
    let vowelCount = s.slice(L,R).match( /[aeiou]/gi );
    vowelCount = vowelCount?vowelCount.length:0;
    
    let max = vowelCount;
    while(R<s.length){

        if( vowelRE.test(s[L]) ){
            vowelCount += -1;
        }

        if( vowelRE.test(s[R]) ){
            vowelCount += 1;
        }

        max = Math.max(max, vowelCount);
        L++;
        R++;
    }

    return max;
};