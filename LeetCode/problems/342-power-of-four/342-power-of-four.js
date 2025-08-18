/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    //5726623061 = 10101... ect
    const uwu = (n)=>{return (n)>0;}
    const nya = (n)=>{return ((n)&(n-1)) == 0;}
    const blah = (n)=>{return ((n)&5726623061) > 0;}
    return uwu(n) && nya(n) && blah(n);
};
