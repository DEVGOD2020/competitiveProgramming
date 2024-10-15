/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function(s) {
    let oneCount = 0;
    let score = 0;
    for(let I = 0; I<s.length; I++){
        if(s[I] == 1){
            oneCount++;
        }else{
            score+= oneCount;
        }
    }
    return score;
};