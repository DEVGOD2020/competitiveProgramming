/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let expected = [...heights].sort(function(a,b){return a-b;})
    let L = 0;
    let score = 0;
    for(let I = 0; I<heights.length; I++){
        if(heights[I] !== expected[I]){
            score++;
        }
    }
    return score;
};