function largestRectangleArea(heights) {
    let stack = [];
    let ans = 0;
    for(let I = 0; I<=heights.length; I++){
        while(stack.length && ( I == heights.length || heights[I] < heights[stack[stack.length-1]])){
            let PREV = stack.pop();
            let H = heights[PREV];
            let W = I-(stack[stack.length-1]??-1)-1;
            ans = Math.max(ans, H*W);
        }
        stack.push(I);
    }
    return ans;
}