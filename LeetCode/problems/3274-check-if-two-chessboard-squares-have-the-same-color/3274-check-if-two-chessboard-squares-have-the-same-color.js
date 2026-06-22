/**
 * @param {string} c1
 * @param {string} c2
 * @return {boolean}
 */
var checkTwoChessboards = function(c1, c2) {
    let blah = (c)=>{
        return ((c.charCodeAt(0)-65) + Number(c[1]))%2 == 0;
    }
    return blah(c1) == blah(c2);
};