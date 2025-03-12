/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors, k) {
    let range = 1;
    let score = 0;
    let windowColor = colors[0];
    for(let I = 1; I<colors.length+k-1; I++){
        if( colors[I%colors.length] === windowColor){
            range = 1;
        }else{
            range += 1;
        }
        score += +(range>=k);
        windowColor = colors[ I%colors.length ];
    }

    return score;
};