/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const zigzag = _.range(numRows);
    zigzag.push(...zigzag.slice(1, -1).reverse());
    const rows = new Array(numRows).fill('');

    for(let I = 0; I<s.length; I++){
        rows[zigzag[I%zigzag.length]] += s[I];
    }

    return rows.join("");
};