/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    let rookPos;
    for(let row = 0; row<8; row++){
        for(let col = 0; col<8; col++){
            if(board[row][col] == "R"){
                rookPos = [row,col];
            }
        }
    }

    const dirs = [[0,1],[1,0],[0,-1],[-1,0]];
    let score = 0;
    for(let [dx,dy] of dirs){
        let [tempX,tempY] = rookPos;
        while( (tempX >= 0 && tempX <= 7) && (tempY >= 0 && tempY <= 7) ){
            if(board[tempX][tempY] === "p"){
                score++;
                break;
            }
            if(board[tempX][tempY] === "B"){ break; }
            tempX += dx;
            tempY += dy;
        }
    }

    return score;
};
