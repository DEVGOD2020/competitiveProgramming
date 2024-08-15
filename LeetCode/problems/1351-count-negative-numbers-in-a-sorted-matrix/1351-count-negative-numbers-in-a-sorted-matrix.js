/**
 * @param {number[][]} grid
 * @return {number}
 */

//Better
var countNegatives = function(grid) {
    let amount = 0;
    for(let A of grid){
        label:
        for(let B = A.length-1; B >= 0; B+=-1){
            if(A[B] < 0){ amount++;}
            else{ break label; }
        }
    }
    return amount;
};

//Bruteforce
var countNegatives2 = function(grid) {
    let amount = 0;
    for(let A of grid){
        for(let B of A){
            if(B < 0){
                amount++;
            }
        }
    }
    return amount;
};