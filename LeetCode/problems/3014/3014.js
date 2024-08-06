/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    let score = 0;
    let freqMap = _.orderBy(_.countBy(word), [], ['desc']);
    _.forEach(freqMap, (value, key) => score += value*(Math.floor(key/8)+1));
    return score;
};