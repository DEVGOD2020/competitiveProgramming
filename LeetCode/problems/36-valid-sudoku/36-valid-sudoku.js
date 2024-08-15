/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let row = {};
    let col = {};
    let cell = {};

    //Turn board matrix into some hash maps
    for(let A in board){
        for(let B in board[A]){
            if(board[A][B] != "."){
                if(row[A] === undefined){row[A] = [];}
                if(col[B] === undefined){col[B] = [];}
                if(cell[3*Math.floor(B/3)+Math.floor(A/3)] === undefined){cell[3*Math.floor(B/3)+Math.floor(A/3)] = [];}
                row[A].push(board[A][B]);
                col[B].push(board[A][B]);
                cell[3*Math.floor(B/3)+Math.floor(A/3)].push(board[A][B]);
            }
        }
    }

    //Run checks
    for(let Z of Object.values(row)){
        const set = new Set(Z);
        if(Z.length != set.size){
            return false;
        }
    }
    for(let Z of Object.values(col)){
        const set = new Set(Z);
        if(Z.length != set.size){
            return false;
        }
    }
    for(let Z of Object.values(cell)){
        const set = new Set(Z);
        if(Z.length != set.size){
            return false;
        }
    }
    
    return true;
};