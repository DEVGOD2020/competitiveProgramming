/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const N = heights.length;
    let stack = [];
    let ans = 0;
    for(let I = 0; I<=heights.length; I++){
        while(stack.length && (I==N || (heights[I] < heights[stack.at(-1)])) ){
            let H = heights[stack.pop()];
            let prev = (stack.at(-1)??-1);
            let W = I - prev - 1;
            ans = Math.max(ans, H*W);
        }
        stack.push(I);
    }
    return ans;
};
