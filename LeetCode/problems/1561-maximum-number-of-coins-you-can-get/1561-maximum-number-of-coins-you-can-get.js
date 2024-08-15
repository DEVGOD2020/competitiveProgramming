/**
 * @param {number[]} piles
 * @return {number}
 */

var maxCoins = function(piles) {
    piles.sort(function(a, b) { return b - a; });

    let I = 0;
    let me = 1;
    let score = 0;
    const groups = piles.length/3;
    while(I<groups){
        score += piles[me];
        me += 2;
        I++;
    }

    return score;
};