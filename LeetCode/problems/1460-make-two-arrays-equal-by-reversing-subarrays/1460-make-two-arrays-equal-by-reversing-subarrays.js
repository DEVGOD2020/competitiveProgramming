/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */

var canBeEqual = function(target, arr) {
    return _.isEqual(_.countBy(target),_.countBy(arr));
};