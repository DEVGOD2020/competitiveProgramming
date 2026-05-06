/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
var rotateTheBox = function(boxGrid) {
    let newGrid = Array.from(
        {length:boxGrid[0].length},
        ()=> new Array(boxGrid.length).fill(0)
    );

    for(let R = 0; R<boxGrid.length; R++){
        let empty = boxGrid[0].length-1;
        for(let C=boxGrid[0].length-1; C>=0; C--){
            if(boxGrid[R][C] == "*"){
                empty = C-1;
            }else if(boxGrid[R][C] == "#"){
                [boxGrid[R][C],boxGrid[R][empty]] = [boxGrid[R][empty],boxGrid[R][C]];
                empty--;
            }
        }
    }

    for(let R = 0; R<boxGrid.length; R++){
        for(let C = 0; C<boxGrid[0].length; C++){
            newGrid[C][R] = boxGrid[boxGrid.length-R-1][C];
        }
    }

    return newGrid;
};
