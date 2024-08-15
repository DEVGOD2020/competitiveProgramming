/**
 * @param {number[][]} accounts
 * @return {number}
 */

var maximumWealth = function(accounts){
    return Math.max(...accounts.map((el) => el.reduce( (a,b)=>a+b)));
}

var maximumWealth2 = function(accounts) {
    let customers = [];
    let max = 0;
    for(let customer of accounts){
        max = Math.max( customer.reduce(function(a,b){return a+b;},0), max)
    }

    return max;
};