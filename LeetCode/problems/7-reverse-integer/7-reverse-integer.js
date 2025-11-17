/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let blah = 0;
    let sign = Math.sign(x);
    x = Math.abs(x);
    while(x > 0){
        blah = blah*10 + x%10;
        x = Math.floor(x/10);
    }
    if(blah > (2**31) - 1){ return 0; }
    return sign*blah;
};
