/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
    let arr = [pref[0]];

    for(let A=1; A<pref.length; A++){
        arr[A] = pref[A-1]^pref[A];
    }

    return arr;
};