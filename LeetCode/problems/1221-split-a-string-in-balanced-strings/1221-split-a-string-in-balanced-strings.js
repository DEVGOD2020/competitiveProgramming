/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let val = 0;
    let A = 0;
    for(a of s){
        if(a == 'R'){
            val++;
        }else{
            val+=-1;
        }
        if(val == 0){
            A++;
        }
    }

    return A;
};