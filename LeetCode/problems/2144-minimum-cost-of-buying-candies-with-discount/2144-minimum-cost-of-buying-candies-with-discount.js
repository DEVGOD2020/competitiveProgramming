/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
    return cost.sort((a,b)=>b-a).reduce(
        (sum,el,I)=>sum+(((I+1)%3>0)?el:0)
    );
};
