/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    return n.split("").reduce( (m,el)=> m=Math.max(m,Number(el)),0);
};
