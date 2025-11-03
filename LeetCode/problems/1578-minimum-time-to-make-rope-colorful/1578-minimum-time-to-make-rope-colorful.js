/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    return colors.matchAll(/(.)\1+/g).reduce( 
        (acc,el)=> {
            let max = 0;
            let sum = 0;
            for(let I = el.index; I < el[0].length+el.index; I++){
                max = Math.max(max, neededTime[I]);
                sum += neededTime[I];
            }
            return acc + (sum-max);
        },0
    );
};
