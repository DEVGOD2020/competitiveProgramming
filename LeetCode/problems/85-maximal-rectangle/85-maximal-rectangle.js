/**
 * @param {character[][]} matrix
 * @return {number}
 */

var largestRectangleArea = function(heights) {
    heights.push(0);
    let stack = [-1];
    let ans = 0;
    for(let I = 0; I<heights.length; I++){
        while(stack.length && heights[I] < heights[stack.at(-1)]){
            let H = heights[stack.pop()];
            let W = I - stack.at(-1) - 1;
            ans = Math.max(ans, H*W);
        }
        stack.push(I);
    }

    return ans;
};

var maximalRectangle = function(matrix) {
    let DP = Array.from(
        {length:matrix.length}, 
        ()=> new Array(matrix[0].length).fill(0)
    );
    DP[0][0] = Number(matrix[0][0]);

    for(let row = 0; row<matrix.length; row++){
        for(let col = 0; col<matrix[0].length; col++){
            if(matrix[row][col] == "1"){
                DP[row][col] = (DP[row-1]?.[col]??0) + 1;
            }else{
                DP[row][col] = 0;
            }
        }
    }

    let max = 0;
    for(let row of DP){
        max = Math.max(max, largestRectangleArea(row) );
    }

    return max;
};
