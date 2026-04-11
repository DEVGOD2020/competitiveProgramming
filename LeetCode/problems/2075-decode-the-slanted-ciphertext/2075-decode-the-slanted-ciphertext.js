/**
 * @param {string} encodedText
 * @param {number} rows
 * @return {string}
 */
var decodeCiphertext = function(encodedText, rows) {
    let str = "";
    let group = encodedText.length/rows;
    for(let I = 0; I<group; I++){
        for(let L = I; L<encodedText.length; L+=group+1 ){
            str += encodedText[L];
        }
    }
    return str.trimEnd();
};
