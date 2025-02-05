/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    let letter1 = "";
    let letter2 = "";
    let score = 0;
    for(let I = 0; I<s1.length; I++){
        if(s1[I] !== s2[I]){
            if(score == 0){
                letter1 = s1[I];
                letter2 = s2[I];
            }
            if(score == 1){
                if( letter1 !== s2[I] || letter2 !== s1[I] ){
                    return false;
                }
            }
            score++;
        }
    }
    return score == 0 || score == 2;
};