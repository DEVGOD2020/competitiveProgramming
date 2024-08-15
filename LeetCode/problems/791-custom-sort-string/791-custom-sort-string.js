/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    return s.split("").sort(
        function(a,b){
            return order.indexOf(a)-order.indexOf(b);
        }
    ).join("");
};