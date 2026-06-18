/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let L = 0;
    let R = 0;
    let pStar = -1;
    let match = -1;
    while(L<s.length){
        if( (s[L] == p[R]) || (p[R]=="?") ){
            L++;
            R++;
        }
        else if(p[R] == "*"){
            pStar = R;
            match = L;
            R++;
        }
        else if(pStar != -1){
            R = pStar+1;
            match++;
            L = match;
        }else{
            return false;
        }
    }
    while(p[R]=="*"){
        R++;
    }
    return R==p.length;
};