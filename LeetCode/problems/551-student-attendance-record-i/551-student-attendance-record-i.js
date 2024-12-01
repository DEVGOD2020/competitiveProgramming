/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let gone = 0;
    let late = 0;
    for(let chr of s){
        gone += +(chr==="A");
        if(chr === "L"){late++}
        else{late = 0;}

        if(gone >= 2 || late >= 3){
            return false;
        }
    }
    return true;
};
