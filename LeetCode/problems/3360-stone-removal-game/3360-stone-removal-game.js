/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function(n) {
    
    let winner = true;
    let countDown = 10;
    while(n >= 0){
        winner = !winner;
        n += -countDown;
        countDown--;
    }

    return winner;
};

