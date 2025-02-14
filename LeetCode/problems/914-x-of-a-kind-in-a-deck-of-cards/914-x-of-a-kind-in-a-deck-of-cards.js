/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    let count = Object.values( _.countBy(deck) );
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    
    let score = count[0];
    for(let C of count){
        score = gcd(score,C);
        if(score === 1){
            return false;
        }
    }

    return true;
};