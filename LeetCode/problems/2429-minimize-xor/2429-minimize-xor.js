/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var minimizeXor = function(num1, num2) {
    let bitCount = num2.toString(2).split("").filter((el)=>el=="1").length;

    let X = 0;

    let I = 2**31;
    while(I>0 && bitCount > 0){
        if(num1&I){
            X |= I;
            bitCount--;
        }
        I = I >>> 1;
    }

    I = 1;
    while(bitCount > 0){
        if( !(X&I) ){
            X |= I;
            bitCount--;
        }
        I = I << 1;
    }

    return X;
};