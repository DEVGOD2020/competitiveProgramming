/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let freq = _.countBy((s1+" "+s2).split(" "));
    return _.keys(
        _.pickBy(
            freq, 
            ( val, key ) => val===1
        )
    )
};