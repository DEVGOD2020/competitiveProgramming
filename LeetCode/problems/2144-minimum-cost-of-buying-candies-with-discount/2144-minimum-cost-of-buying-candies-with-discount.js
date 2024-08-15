/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (cost) {
    if (cost.length < 3) {
        return cost.reduce(function (a, b) { return a + b });
    }
    cost.sort(function (a, b) { return b - a; });

    let totalCost = cost.reduce(function (a, b) { return a + b })

    for (let I = 0; I < Math.floor(cost.length / 3) * 3; I += 3) {
        if( Math.min(cost[I+1], cost[I+2]) >= cost[I]){
            totalCost += -cost[I];
        }else{
            totalCost += -cost[I+2];
        }
    }

    return totalCost;
};
