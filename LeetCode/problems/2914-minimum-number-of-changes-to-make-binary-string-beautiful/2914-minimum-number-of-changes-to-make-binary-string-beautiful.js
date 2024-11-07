/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function(s) {
    return _.chunk(s.split(""),2).reduce( (sum,el)=>+(el[0]!==el[1])+sum,0);
};