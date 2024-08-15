/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function(numOnes, numZeros, numNegOnes, k) {
    let I = 0;
    let score = 0;
    while(I<k){
        if(numOnes > 0){
            numOnes += -1;
            score +=1;
        }else if(numZeros){
            numZeros += -1;
        }else if(numNegOnes){
            numNegOnes += -1;
            score += -1;
        }else{
            break;
        }
        I++;
    }
    return score;
};