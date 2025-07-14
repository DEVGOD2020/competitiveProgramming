/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    let L = 0;
    let R = 0;
    while(R < typed.length){
        if( L < name.length && name[L] === typed[R]){
            L++;
        }
        else if( R == 0 || typed[R] != typed[R-1]){
            return false;
        }
        R++;
    }
    return L === name.length;
};
