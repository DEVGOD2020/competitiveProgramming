/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let look = [];
    for(let a in board[0]){
        for(let b in board){
            if(board[b][a] === word[0]){
                look.push([ parseInt(a), parseInt(b) ]);
            }
        }
    }

    function search(localBoard,X,Y,str=""){
        if(str === word){return true;}
        if(X < 0 || X >= board[0].length){return false;}
        if(Y < 0 || Y >= board.length){return false;}

        if(localBoard[Y][X] !== word[str.length]){
            return false;
        }

        const letter = localBoard[Y][X];
        localBoard[Y][X] = "$";

        const ans = search(localBoard,X-1, Y, str+letter) || 
        search(localBoard,X+1, Y, str+letter) ||
        search(localBoard,X, Y-1, str+letter) ||
        search(localBoard,X, Y+1, str+letter);

        localBoard[Y][X] = letter;
        return ans;
    }

    
    for(let el of look){
        if( search(board, el[0],el[1]) ){
            return true;
        }
    }

    return false;
};