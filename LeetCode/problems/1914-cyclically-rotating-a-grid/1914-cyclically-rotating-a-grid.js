/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var rotateGrid = function(grid, k) {
    let N = Math.min(grid.length, grid[0].length);
    for(let A = 0; A<N/2; A++){
        let K = k % ((grid[0].length*2) + (grid.length*2)-8*A - 4);
        for(let I = 0; I < K; I++){
        let head = [A,A];
        let tail = [A,A];
        //Right
        for(let Z = 0; Z<grid[0].length-(2*A); Z++){
            [grid[head[0]][head[1]],grid[tail[0]][tail[1]]] = 
            [grid[tail[0]][tail[1]],grid[head[0]][head[1]]];
            tail = [head[0],head[1]];
            head = [head[0],head[1]+1];
        }
        head = tail;
        //Down
        for(let Z = 0; Z<grid.length-(2*A); Z++){
            [grid[head[0]][head[1]],grid[tail[0]][tail[1]]] = 
            [grid[tail[0]][tail[1]],grid[head[0]][head[1]]];
            tail = [head[0],head[1]];
            head = [head[0]+1,head[1]];
        }
        head = tail;
        //Left
        for(let Z = 0; Z<grid[0].length-(2*A); Z++){
            [grid[head[0]][head[1]],grid[tail[0]][tail[1]]] = 
            [grid[tail[0]][tail[1]],grid[head[0]][head[1]]];
            tail = [head[0],head[1]];
            head = [head[0],head[1]-1];
        }
        head = tail;
        //Up
        for(let Z = 0; Z<grid.length-(2*A)-1; Z++){
            [grid[head[0]][head[1]],grid[tail[0]][tail[1]]] = 
            [grid[tail[0]][tail[1]],grid[head[0]][head[1]]];
            tail = [head[0],head[1]];
            head = [head[0]-1,head[1]];
        }
        }
    }

    return grid;
};
