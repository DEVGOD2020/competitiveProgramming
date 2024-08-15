/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let count = 0;

    for(let I = 0; I<flowerbed.length; I++){
        if(flowerbed[I] == 0){
            if( (I == 0 || flowerbed[I-1] == 0) && (I==flowerbed.length-1 || flowerbed[I+1]==0) ){
                flowerbed[I] = 1;
                count++;
                if(count >= n){
                    return true;
                }
            }
        }
    }
    return count >= n;

    
};