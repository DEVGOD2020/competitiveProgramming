/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    let L = 0;
    let R = s.length-1;

    let size = s.length;
    while(L<R){
        if(s[L] === s[R]){
            const curChr = s[L];
            while(s[L] == curChr){
                L++; size += -1;
            }
            while(s[R] == curChr && L < R){
                R+=-1; size += -1;
            }
        }else{
            break;
        }
    }

    return size;
};