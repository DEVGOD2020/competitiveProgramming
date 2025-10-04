/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let L = 0;
    let R = height.length-1;
    let max = 0;
    let score = 0;
    while(L<R){
        score = Math.min(height[L],height[R])*(R-L);
        if(max<score){ max = score;}
        if(height[L]<height[R]){ L++; }
        else{ R--; }
    }
    return max;
};
