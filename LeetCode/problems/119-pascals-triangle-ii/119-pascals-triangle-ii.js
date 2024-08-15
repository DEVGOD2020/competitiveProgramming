/**
 * @param {number} rowIndex
 * @return {number[]}
 */


var getRow = function(rowIndex) {
    if(rowIndex == 0){return [1];}
    else if(rowIndex == 1){return [1,1];}
    let preRow = [1,2,1];

    let I = 0;
    while(I<rowIndex-2){
        let L = 0
        let R = 1;
        let nextRow = [];
        while(R<preRow.length){
            nextRow.push(preRow[L]+preRow[R]);
            L++;
            R++;
        }
        nextRow.unshift(1);
        nextRow.push(1);
        preRow = nextRow;
        I++;
    }

    return preRow;
};