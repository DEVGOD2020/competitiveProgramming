/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const Q = word1.length;
    const W = word2.length;
    let myMap = new Map();
    let blah = function(A,B){
        const KEY = A*501+B;
        if(myMap.has(KEY)){
            return myMap.get(KEY);
        }
        if(A > Q || B > W){return Infinity}
        if(A == Q && B == W){return 0;}
        if(word1[A] == word2[B]){return blah(A+1,B+1);}
        else{
            myMap.set(KEY, 
                Math.min(
                    1+blah(A+1,B),
                    1+blah(A+1,B+1),
                    1+blah(A,B+1)
                )
            )
            return myMap.get(KEY);
        }
    }
    return blah(0,0);
};
