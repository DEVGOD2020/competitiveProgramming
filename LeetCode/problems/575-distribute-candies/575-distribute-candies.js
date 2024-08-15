/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const mySet = new Set(candyType);
    return Math.min(mySet.size,candyType.length/2);
};