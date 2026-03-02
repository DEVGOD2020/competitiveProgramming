/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
    let score = 0;
    let carry = "0";
    for(let R = s.length-1; R>=0; R--){
        if(R==0 && carry == 0){break;}
        if(s[R] == carry){
            score++; carry = s[R];
        }
        if(s[R] !== carry){
            score+=2; carry = "1";
        }
    }
    return score;
};

