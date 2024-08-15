/**
 * @param {number[]} deck
 * @return {number[]}
 */

var deckRevealedIncreasing = function(deck) {
    deck.sort((a, b) => a - b);
    console.log(deck);
    const ans = [];
    while (deck.length) {
        console.log(ans);
        ans.unshift(deck.pop());
        ans.unshift(ans.pop());
    }
    ans.push(ans.shift());
    return ans;
};



