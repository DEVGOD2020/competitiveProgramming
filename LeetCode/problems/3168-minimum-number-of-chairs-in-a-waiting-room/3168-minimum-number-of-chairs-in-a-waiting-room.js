/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function(s) {
    let max = 0;
    let chairs = 0;
    for(let I = 0; I < s.length; I++){
        if(s[I] == 'E'){chairs++;}
        if(s[I] == "L"){chairs--;}
        max = Math.max(max,chairs);
    }
    return max;
};