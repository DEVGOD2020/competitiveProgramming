/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    return (s.match(/(.)(\1)+/g)??[]).reduce((max,el)=>Math.max(max,el.length), 1);
};
