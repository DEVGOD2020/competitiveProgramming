/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let result = 0b0;
    let curr = n;
    
    for (let i = 0; i < 32; i += 1) {
        const lastBit = curr & 0b1;   // Get last bit
        result = result << 1;         // Make space for new last bit
        result = result | lastBit;    // Apply last bit to result
        curr = curr >> 1;             // destroy last bit of current 
    }
    
	// Fix results less than zero (destroy sign bit)
    return result >>> 0;
};