/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
    let time = customers[0][0];
    let timeTook = 0;
    for(let order of customers){
        if(time < order[0]){
            time = order[0];
        }
        timeTook += (time+order[1])-order[0];
        time += order[1];
    }

    return timeTook/customers.length;
};