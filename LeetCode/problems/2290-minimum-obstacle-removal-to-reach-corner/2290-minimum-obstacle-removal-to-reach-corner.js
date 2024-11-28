/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumObstacles = function (grid) {

    let queue = [[0, 0]];
    let scores = Array.from(
        { length: grid.length },
        () => new Array(grid[0].length).fill(Infinity)
    );
    scores[0][0] = 0;

    const dirs = [[-1,0],[1,0],[0,-1],[0,1]];
    while (queue.length) {
        let [CY,CX] = queue.pop();

        for (let I = 0; I<4; I++) {
            const Y = CY+dirs[I][1];
            const X = CX+dirs[I][0];

            if(Y >= 0 && Y < grid.length && X >= 0 && X < grid[0].length 
            && scores[Y][X] === Infinity){
                scores[Y][X] = scores[CY][CX] + grid[Y][X];
                if (grid[Y][X] == 0) {
                    queue.push([Y, X]);
                } else {
                    queue.unshift([Y, X]);
                }
            }
        }
    }

    return scores[grid.length - 1][grid[0].length - 1];
};