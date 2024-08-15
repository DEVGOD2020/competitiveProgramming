/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function (land) {
    const farmLand = [];
    function search(Y, X, start=[X,Y]) {
        if (X < 0 || Y < 0 || X >= land[0].length || Y >= land.length || land[Y][X] !== 1) {
            return [start[1],start[0],-1,-1];
        } else {
            land[Y][X] = -1;
            const down = search(Y + 1, X, start);
            const right = search(Y, X + 1, start);
            return [start[1],start[0],Math.max(down[2],Y),Math.max(right[3],X)];
        }
    }

    for (const Y in land) {
        for (const X in land[0]) {
            if(land[Y][X] === 1){
                farmLand.push( search(parseInt(Y),parseInt(X)) );
            }
        }
    }

    return farmLand;

};