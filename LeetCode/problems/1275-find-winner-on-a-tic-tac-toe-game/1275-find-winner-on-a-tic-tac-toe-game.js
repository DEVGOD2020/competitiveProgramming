/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    let row = [0,0,0];
    let col = [0,0,0];
    let diag1 = 0;
    let diag2 = 0;

    let player = 1;
    for(let [X,Y] of moves){
        row[X] += player;
        col[Y] += player;
        if(X==Y){diag1 += player;}
        if(X+Y == 2){diag2 += player;}

        if( Math.abs(row[X]) == 3){return player>0 ? "A" : "B";}
        if( Math.abs(col[Y]) == 3){return player>0 ? "A" : "B";}
        if( Math.abs(diag1) == 3){return player>0 ? "A" : "B";}
        if( Math.abs(diag2) == 3){return player>0 ? "A" : "B";}
        player *= -1;
    }

    if(moves.length == 9){return "Draw";}
    return "Pending";
};
