/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
    let nya = sentence.match(/(?=(\w)(\s\1))/g)?.length||0;
    let owo = sentence.match(/\s/g)?.length||0;
    return nya===owo && (sentence[0] === sentence[sentence.length-1]);
};