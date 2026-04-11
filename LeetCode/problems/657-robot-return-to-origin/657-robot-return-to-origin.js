/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let X = 0;
    let Y = 0;
    for(let chr of moves){
        if(chr == "L"){X--;}
        if(chr == "R"){X++;}
        if(chr == "U"){Y--;}
        if(chr == "D"){Y++;}
    }
    return X == 0 && Y == 0;
};
