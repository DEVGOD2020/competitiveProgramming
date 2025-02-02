/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValid = function(s, locked) {
    if(s.length % 2 == 1){return false; }

    let open = 0;
    let close = 0;

    for(let L = 0; L<s.length; L++){
        if(locked[L] === "0" || s[L] === "("){
            open++;
        }else{
            close++;
        }
        if(open<close){
            return false;
        }
    }

    open = 0;
    close = 0;
    for(let R = s.length-1; R>=0; R--){
        if(locked[R] === "0" || s[R] === ")"){
            close++;
        }else{
            open++;
        }
        if(open>close){
            return false;
        }
    }

    
    return true;
};