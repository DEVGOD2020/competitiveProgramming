/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
    let arr = [];
    for(let A = 0; A<rows; A++){
        for(let B = 0; B<cols; B++){
            let dist = Math.abs(A-rCenter) + Math.abs(B-cCenter);
            if( arr[dist] == undefined){
                arr[dist] = [];
            }
            arr[dist].push([A,B]);
        }
    }
    return [...arr].flat();
};
