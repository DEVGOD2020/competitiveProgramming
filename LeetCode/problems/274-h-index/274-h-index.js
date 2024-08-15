/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    //6,5,3,1,0
    citations.sort((a, b) => b - a);
    let I = 0;
    while (I < citations[I]) I++;
    return I;
};