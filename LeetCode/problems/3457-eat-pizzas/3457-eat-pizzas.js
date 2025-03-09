/**
 * @param {number[]} pizzas
 * @return {number}
 */
var maxWeight = function(pizzas) {
    pizzas.sort((a,b)=>a-b);
    
    let oddDays = Math.ceil( (pizzas.length/4)/2 );
    let evenDays = Math.floor( (pizzas.length/4)/2 );
    
    let score = 0;

    let R = pizzas.length-1;
    while(oddDays > 0){
        score += pizzas[R];
        R--;
        oddDays--;
    }

    while(evenDays > 0){
        R--;
        score += pizzas[R];
        R--;
        evenDays--;
    }

    return score;
};