/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    let score = 0;
    let lines = 1;
    for(chr of s){
        if(score + widths[ chr.charCodeAt(0)-97 ] <= 100 ){
            score += widths[ chr.charCodeAt(0)-97 ];
        }else{
            score = widths[ chr.charCodeAt(0)-97 ];
            lines++;
        }
    }
    return [lines,score];
};