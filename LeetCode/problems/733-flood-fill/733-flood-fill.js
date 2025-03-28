/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    const ogColor = image[sr][sc];
    let dfs = function(row,col){
        let currColor = image[row][col];
        if(currColor === ogColor && currColor !== newColor){
            image[row][col] = newColor;

            if(row > 0){ dfs(row-1,col); }
            if(col > 0){ dfs(row,col-1); }
            if(row < image.length-1){ dfs(row+1,col); }
            if(col < image[0].length-1){ dfs(row,col+1); }
        }

        return image;
    }
    return dfs(sr,sc);
};