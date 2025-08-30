/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rowMap = new Map();
    let colMap = new Map();
    let cellMap = new Map();
    for(let row = 0; row<9; row++){
        for(let col = 0; col<9; col++){
            let val = board[row][col];
            if(val == "."){continue;}

            const cell = Math.floor(row/3)*10+Math.floor(col/3);
            if( !rowMap.has(row) ){rowMap.set(row, new Set() );}
            if( !colMap.has(col) ){colMap.set(col, new Set() );}
            if( !cellMap.has(cell) ){cellMap.set(cell, new Set() );}

            if(rowMap.get(row).has(val)){return false;}
            if(colMap.get(col).has(val)){return false;}
            if(cellMap.get(cell).has(val)){return false;}

            rowMap.get(row).add(val);
            colMap.get(col).add(val);
            cellMap.get(cell).add(val);
        }
    }
    return true;
};
