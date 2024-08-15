/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function(n) {
    
    function a(n){
        return 1 - (n + 1) / 2**n;
    }

    console.log(a(n));
    return 3**n-a(n);
};