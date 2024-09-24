/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    if(_.sumBy(cost) > _.sumBy(gas)){
        return -1;
    }else{
        let slope = _.map(gas, (el,I)=>gas[I]-cost[I]);
        let myTank = 0;
        let lowestTank = 1e10;
        let lowestStation = 0;
        for(let I = 0; I<slope.length; I++){
           myTank += slope[I];
            if(myTank<=lowestTank){
                lowestTank = myTank;
                lowestStation = I;
            }
        }
        return (lowestStation+1)%gas.length;
    }
};