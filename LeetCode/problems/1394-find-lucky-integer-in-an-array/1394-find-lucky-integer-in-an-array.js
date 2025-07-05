/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    return _.toPairs(
        _.countBy(arr)
    ).filter(
        (el)=>Number(el[0])==el[1]
    ).sort( 
        (el)=>-el[1]
    )[0]?.[1] ?? -1
};
