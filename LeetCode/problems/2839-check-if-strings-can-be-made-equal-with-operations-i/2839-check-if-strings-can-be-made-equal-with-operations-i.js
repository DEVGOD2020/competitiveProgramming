/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function(s1, s2) {
    let mySet = new Set();
    mySet.add( `${s1[0]}${s1[1]}${s1[2]}${s1[3]}` );
    mySet.add( `${s1[2]}${s1[1]}${s1[0]}${s1[3]}` );

    mySet.add( `${s1[0]}${s1[3]}${s1[2]}${s1[1]}` );
    mySet.add( `${s1[2]}${s1[3]}${s1[0]}${s1[1]}` );

    return mySet.has(s2);
};