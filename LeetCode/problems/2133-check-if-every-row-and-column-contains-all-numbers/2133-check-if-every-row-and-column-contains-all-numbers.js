/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    let rows = {};
    let cols = {};

    for(a in matrix){
        
        //Add cols here

        if(rows[a] == undefined){
            rows[a] = matrix[a];
        }
    }

    console.log(rows);
    console.log(cols);

    return true;
};