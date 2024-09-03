/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
var checkTwoChessboards = function(coordinate1, coordinate2) {
    let arr = [1,0,1,0,1,0,1,0];
    let oppSet = new Set(['b','d','f','h']);
    let ans1 = arr[parseInt(coordinate1[1])-1];
    let ans2 = arr[parseInt(coordinate2[1])-1];
    if( oppSet.has(coordinate1[0]) ){ ans1 = +!ans1; }
    if( oppSet.has(coordinate2[0]) ){ ans2 = +!ans2; }
    return ans1 === ans2;
}