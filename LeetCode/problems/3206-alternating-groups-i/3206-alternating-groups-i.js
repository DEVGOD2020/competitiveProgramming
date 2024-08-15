/**
 * @param {number[]} colors
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors) {
    
    let score = 0;
    for(let L = 1; L<colors.length-1; L++){
        if( colors[L-1] === colors[L+1] && colors[L-1] !== colors[L]){
            score++;
        }
    }

    if(colors[colors.length-1] == colors[1] && colors[0] !== colors[1]){
        score++;
    }
    if(colors[colors.length-2] == colors[0] && colors[colors.length-1] !== colors[0]){
        score++;
    }

    return score;
};