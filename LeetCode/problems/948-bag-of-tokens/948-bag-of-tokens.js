/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    tokens.sort(function(a,b){return a-b});

    let score = 0;
    let L = 0;
    let R = tokens.length-1;
    while(L<R){
        if(tokens[L] <= power){
            score += 1;
            power += -tokens[L];
            L++;
        }else if(score >= 1){
            score += -1;
            power += tokens[R];
            R += -1;
        }else{
            break;
        }
    }

    //last turn
    if(tokens[L] <= power){
        score += 1;
    }

    return score;
};