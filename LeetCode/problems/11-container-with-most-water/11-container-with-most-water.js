/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let L = 0;
    let R = height.length-1;
    let size = 0;
    let value = 0;
    while(L<R){
        value = Math.min(height[L],height[R])*(R-L);
        size = Math.max(size,value);

        if(height[L]<height[R]){ L++; }
        else if(height[L]>height[R]){ R+=-1; }
        else{L++; R+=-1;}
    }

    return size;
};