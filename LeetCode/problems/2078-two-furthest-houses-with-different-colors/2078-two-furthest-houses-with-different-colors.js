/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    let ans = 0;
    for(let I = colors.length-1; I>=0; I--){
        if(colors[I] !== colors[0]){
            ans = Math.max(ans,I);
        }
    }
    for(let I = 0; I<colors.length; I++){
        if(colors[I] !== colors[colors.length-1]){
            ans = Math.max(ans,colors.length-1-I);
        }
    }
    return ans;
};
