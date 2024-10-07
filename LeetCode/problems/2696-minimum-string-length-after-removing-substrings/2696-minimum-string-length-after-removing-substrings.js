/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    while( /AB|CD/.test(s) ){
        s = s.replaceAll(/AB|CD/g,"");
    }
    return s.length;
};