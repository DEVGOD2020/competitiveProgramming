/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    
    for(let a in image){
        let L = 0;
        let R = image[a].length-1;
        let temp = image[a][L];
        while(L<R){
            temp = image[a][L];
            image[a][L] = image[a][R]^1;
            image[a][R] = temp^1;

            L++;
            R--;
        }

        if(image[a].length%2 == 1){
            temp = image[a][L];
            image[a][L] = image[a][R]^1;
            image[a][R] = temp^1;
        }
    }

    return image
};