/**
 * @param {number[]} heights
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
