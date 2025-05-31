/**
 * @param {string} word
 * @return {number}
 */
var countVowelSubstrings = function(word) {
    let myMap = new Map();
    let mySet = new Set();
    let L = 0;
    let prevL = -1;
    let R = 0;
    let score = 0;
    while(R<word.length){
        if(!/a|e|i|o|u/.test(word[R])){
            prevL = R;
            R++;
            L = R;
            myMap.clear();
            mySet.clear();
            continue;
        }

        myMap.set(word[R], (myMap.get(word[R])|0)+1 )
        mySet.add(word[R]);
        
        while(mySet.size == 5 && L<R){
            if(myMap.get(word[L])-1 <= 0 ){break;}
            myMap.set( word[L], (myMap.get(word[L])|0)-1 )
            if(myMap.get(word[L]) <= 0){
                mySet.delete(word[L]);
            }
            L++;
        }

        if(mySet.size == 5){
            score += L-prevL;
        }
        R++;
    }

    return score;
};
