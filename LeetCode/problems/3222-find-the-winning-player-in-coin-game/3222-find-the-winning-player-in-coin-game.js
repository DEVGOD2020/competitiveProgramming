/**
 * @param {number} x
 * @param {number} y
 * @return {string}
 */
var losingPlayer = function(x, y) {
    let turn = false;
    while(x >= 1 && y >= 4){
        x += -1;
        y += -4;
        turn = !turn;
    }

    return !turn ? "Bob" : "Alice";
};