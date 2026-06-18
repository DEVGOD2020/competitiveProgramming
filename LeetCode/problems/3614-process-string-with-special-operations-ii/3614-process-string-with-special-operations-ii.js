/**
 * @param {string} s
 * @param {number} k
 * @return {character}
 */
var processStr = function(s, k) {
    let score = 0;
    for(let chr of s){
        if(chr == "*" && score>0){score--;}
        else if(chr == "#"){score *=2;}
        else if(chr == "%"){score = score;}
        else if(chr !== "*"){score++;}
    }
    if(score <= k){return ".";}
    for(let I = s.length-1; I>=0; I--){
        let chr = s[I];
        if(chr == "*"){score++;}
        else if(chr == "#"){
            if( k>=Math.floor(score/2)){
                k = k-Math.floor(score/2);
            }
            score = Math.floor(score/2);
        }
        else if(chr == "%"){k = score-1-k;}
        else if(score == k+1){return chr;}
        else{score--;}
    }
};