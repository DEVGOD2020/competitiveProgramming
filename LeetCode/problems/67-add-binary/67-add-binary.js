/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let ans = "";

    let X = a.length-1;
    let Y = b.length-1;
    let C = 0;

    while(X >= 0 || Y >= 0 || C == 1){
        C = ( Number( a[X--]??0 ) + Number( b[Y--]??0 ) + C);
        ans = (C%2) + ans;
        C = C>>1;
    }

    return ans;
};
