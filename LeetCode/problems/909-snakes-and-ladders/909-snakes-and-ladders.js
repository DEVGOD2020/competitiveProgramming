/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
    let spotToCord = function(I){
        I--;
        let col = (board.length-Math.floor(I/board.length))-1;
        let row = (board.length-col)%2 == 0 ? (board.length-1) - (I%board.length) : (I%board.length);
        return [col,row];
    }

    let bfs = function(root){
        let ans = -1;
        let queue = [ [root,0] ];
        let visit = new Set();
        while(queue.length){
            let [node,diceRolls] = queue.shift();
            
            let [col,row] = spotToCord(node);
            if(board[col][row] !== -1){
                node = board[col][row];
            }

            if(node > board.length**2){continue;}
            if(node === board.length ** 2){return diceRolls;}

            if(visit.has(node)){continue;}
            visit.add(node);
            for(let I = 1; I<=6; I++){
                queue.push([node+I,diceRolls+1]);
            }
        }
        return ans;
    }

    return bfs(1);
};
