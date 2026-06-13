/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function(words, weights) {
    return words.map(
        (el)=>
        String.fromCharCode(
                (26-(
                el.split("").reduce(
                (sum,el)=>sum+weights[el.charCodeAt(0)-97],0
                )%26))+96
        )
    ).join("");
};