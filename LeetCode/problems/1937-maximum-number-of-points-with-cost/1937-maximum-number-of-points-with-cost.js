/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    
    let memo = {};
    let helper = function(row, col){
        if(row == points.length-1){
            return points[row][col];
        }

        if(memo[row] !== undefined && memo[row][col] !== undefined){
            return memo[row][col];
        }

        let max = 0;
        for(let C = 0; C<points[0].length; C++){
            max = Math.max(max, helper(row+1,C)-Math.abs(col-C));
        }

        if(memo[row] === undefined){ memo[row] = []; }
        
        memo[row][col] = max+points[row][col];

        return memo[row][col];
    }

    let max = 0;
    for(let I = 0; I<points[0].length; I++){
        max = Math.max(max, helper(0,I));
    }

    return max;
};