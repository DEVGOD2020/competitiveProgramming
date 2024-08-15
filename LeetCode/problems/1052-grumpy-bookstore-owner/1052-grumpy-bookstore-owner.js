/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    let total = 0;
    for(let I = 0; I < customers.length; I++){
        if(grumpy[I] == 0 || I < minutes){
            total += customers[I];
        }
    }

    let max = total;
    
    let L = 0;
    let R = minutes-1;
    while(R<customers.length-1){
        if(grumpy[L] == 1){
            total += -customers[L];
        }
        L++;
        R++;
        if(grumpy[R] == 1){
            total += customers[R];
        }
        max = Math.max(total,max);
    }

    return max;
};