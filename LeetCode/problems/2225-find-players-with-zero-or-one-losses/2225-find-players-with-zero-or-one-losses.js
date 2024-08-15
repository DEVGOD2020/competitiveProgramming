/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    let losers = {};

    for(let match of matches){
        if(losers[match[0]] === undefined){ losers[match[0]] = 0;}
        if(losers[match[1]] === undefined){losers[match[1]] = 0;}
        losers[match[1]]++;
    }

    let win = [];
    let lose = [];

    for(let key in losers){
        if(losers[key] == 0){win.push(key);}
        if(losers[key] == 1){lose.push(key);}
    }

    return [win,lose];
};