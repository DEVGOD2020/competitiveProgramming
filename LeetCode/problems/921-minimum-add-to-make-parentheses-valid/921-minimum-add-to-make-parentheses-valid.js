/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let A = 0;
    let B = 0;
    for(let chr of s){
        if(chr=="("){A++;}
        else{
            if(A>0){A--;}else{B++}
        }
    }
    return A+B;
};