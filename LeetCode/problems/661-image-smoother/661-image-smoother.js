/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    let mat = Array.from(
        { length: img.length }, 
        () => new Array(img[0].length).fill(0)
    );

    for(let row = 0; row < img.length; row++){
        for(let col = 0; col < img[0].length; col++){
            let sum = 0;
            let count = 0;
            for(let nr = row-1; nr<=row+1; nr++){
                for(let nc = col-1; nc<=col+1; nc++){
                    sum += img[nr]?.[nc] || 0;
                    count += img[nr]?.[nc] !== undefined ? 1 : 0;
                }
            }
            mat[row][col] = Math.floor( sum / count);
        }
    }

    return mat;
};