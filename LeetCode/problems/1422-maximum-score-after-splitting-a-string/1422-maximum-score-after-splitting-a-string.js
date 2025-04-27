/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let zeroCount = 0;
    let oneCount = s.split("").filter((el)=>el == "1").length;

    let score = 0;
    for(let I = 0; I<s.length-1; I++){
        let chr = s[I];
        if(chr === "0"){
            zeroCount++;
        }else if(chr === "1"){
            oneCount--;
        }
        score = Math.max(score, zeroCount+oneCount);
    }

    return score;
};