function maxArea(height) {
    let L = 0;
    let R = height.length-1;
    let area = 0;
    while(L<R){
        area = Math.max(area, (R-L) * Math.min(height[L],height[R]) );
        if(height[L] < height[R]){ L++; }
        else{ R--; }
    }
    return area;
}