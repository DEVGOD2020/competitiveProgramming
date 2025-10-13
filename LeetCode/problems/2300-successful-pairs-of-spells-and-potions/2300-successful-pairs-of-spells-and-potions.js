/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    const N = potions.length;
    potions.sort( (a,b)=>a-b);
    let ans = [];
    for(let I = 0; I<spells.length; I++){
        let target = N - _.sortedIndex( 
            potions,
            Math.ceil(success / spells[I] ) 
        );
        ans[I] = target;
    }
    return ans;
};
