/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function(k) {
	function bitCount(n) {
		let count = 0;
		while (n) {
        		n &= (n - 1);
        		count++;
        	}
		return count;
	}
	return String.fromCharCode(bitCount(k-1)+97);
};
