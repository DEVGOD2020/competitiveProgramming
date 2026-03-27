/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var canPartitionGrid = function(grid) {
    let pre1 = [];
    let pre2 = [];

    for(let R = 0; R<grid.length; R++){
        let sum = 0;
        for(let C = 0; C<grid[0].length; C++){
            sum += grid[R][C];
        }
        pre1.push(sum + (pre1.at(-1)??0));
    }

    for(let C = 0; C<grid[0].length; C++){
        let sum = 0;
        for(let R = 0; R<grid.length; R++){
            sum += grid[R][C];
        }
        pre2.push(sum + (pre2.at(-1)??0));
    }

    for(let A of pre1){
        if(pre1.at(-1)-A == A){
            return true;
        }
    }

    for(let A of pre2){
        if(pre2.at(-1)-A == A){
            return true;
        }
    }

    return false;
};
