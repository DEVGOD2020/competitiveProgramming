/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort(function (a, b) {  return a - b;  });
    s.sort(function (a, b) {  return a - b;  });

    let L = 0;
    let R = 0;
    let score = 0;
    while(L<g.length && R<s.length){
        if(g[L] <= s[R]){
            L++;
            R++;
            score++;
        }else{
            R++;
        }
    }

    return score;
};