/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    let score = 0;
    for(let row = 0; row<board.length; row++){
        for(let col = 0; col<board[row].length; col++){
            if(board[row][col] === "X"){
                if(board[row][col-1] !== "X"){
                    if(board[row-1]?.[col] !== "X"){
                        score++;
                    }
                }
            }
        }
    }
    return score;
};