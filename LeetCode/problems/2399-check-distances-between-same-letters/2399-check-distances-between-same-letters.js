/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function(s, distance) {
    for(let I = 0; I<distance.length; I++){
        let L = s.indexOf(String.fromCharCode(97+I));
        let R = s.lastIndexOf(String.fromCharCode(97+I));
        if(L > -1 && R > -1){
            if( R-L-1 !== distance[I]){
                return false;
            }
        }
    }
    return true;
};