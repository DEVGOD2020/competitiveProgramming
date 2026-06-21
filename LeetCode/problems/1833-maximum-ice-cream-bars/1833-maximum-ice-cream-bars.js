/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    let min = Math.min(...costs);
    let max = Math.max(...costs);

    let data = new Array(max-min+1).fill(0);
    for(let num of costs){
        data[num-min]++;
    }

    let score = 0;
    for(let I = min; I<=max; I++){
        if(data[I-min] == 0){continue;}
        let blah = Math.min( 
            data[I-min], 
            Math.floor(coins/I)
        );
        score += blah;
        coins -= blah*I;
    }

    return score;
};