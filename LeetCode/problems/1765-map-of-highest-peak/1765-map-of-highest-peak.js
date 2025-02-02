/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
var highestPeak = function(isWater) {
    let queue = [];
    let pointer = 0;
    let visit = new Set();
    for(let row = 0; row<isWater.length; row++){
        for(let col=0; col<isWater[0].length; col++){
            if(isWater[row][col] === 1){
                queue.push([row,col]);
                isWater[row][col] = 0;
            }else{
                isWater[row][col] = -1;
            }
        }
    }

    let isBounds = function(row,col){
        return row >= 0 && col >= 0 && 
        row < isWater.length && col < isWater[0].length
        && isWater[row][col] === -1;
    }

    while(pointer < queue.length){
        let [row,col] = queue[pointer];
        pointer++;

        let dirs = [[-1,0],[1,0],[0,-1],[0,1]];
        for(let dir of dirs){
            if( isBounds( row+dir[0], col+dir[1] ) ){
                queue.push( [row+dir[0], col+dir[1]] );
                isWater[row+dir[0] ][ col+dir[1] ] = isWater[row][col]+1;
            }
        }
    }

    return isWater;
};