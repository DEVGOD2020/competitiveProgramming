/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function(s, x, y) {
    let a = 0;
    let b = 0;
    let score = 0;
    let max = Math.max(x,y);
    let min = Math.min(x,y);
    let checkLast = x<y ? "a" : "b";
    for(let chr of s){
        a += (chr=='a');
        b += (chr=='b');
        if(/[^ab]/.test(chr) ){
            score += Math.min(a,b)*min;
            a=0; b=0;
        }
        if( a>0 && b>0 && chr==checkLast){
            score+=max;
            a--; b--;
        }
    }

    score += Math.min(a,b)*min;
    return score;
};
