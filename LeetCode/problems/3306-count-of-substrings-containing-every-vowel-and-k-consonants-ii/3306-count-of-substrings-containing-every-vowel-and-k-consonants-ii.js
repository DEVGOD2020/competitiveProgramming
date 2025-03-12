/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function(word, k) {

    let bro = function(k){
        let score = 0;

        let con = 0;
        let vowels = new Map([['a',0],['e',0],['i',0],['o',0],['u',0]]);
        let vowelGoal = ()=>{ 
            return vowels.get('a') && 
            vowels.get('e') && 
            vowels.get('i') && 
            vowels.get('o') && 
            vowels.get('u');
        }

        for(let L = 0, R = 0; R<word.length; R++){
            if( /[aeiou]/.test(word[R]) ){
                vowels.set(word[R],  vowels.get(word[R])+1 );
            }else{
                con++;
            }
            while( vowelGoal() && con > k){
                if( /[aeiou]/.test(word[L]) ){
                    vowels.set(word[L], vowels.get(word[L])-1 );
                }else{
                    con--;
                }
                L++;
            }

            score += R-L+1;
        }
        return score;
    }

    return bro(k) - bro(k-1);
};