/**
 * @param {number} n
 * @return {number[]}
 */
var decimalRepresentation = function(n) {
    let ans = [];
    let I = 1;
    while( n > 0){
        if( (n%10)*(I) > 0){
            ans.unshift( (n%10)*(I) );
        }
        n = Math.floor(n/10);
        I*=10;
    }
    return ans;
};
