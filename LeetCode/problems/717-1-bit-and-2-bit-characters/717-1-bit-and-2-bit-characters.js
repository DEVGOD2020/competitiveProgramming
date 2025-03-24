/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let I = 0;
    while(I<bits.length-1){
        I += bits[I]+1;
    }
    return bits[I] === 0;
};