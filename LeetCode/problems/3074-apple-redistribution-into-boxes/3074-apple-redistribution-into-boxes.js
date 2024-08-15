/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
    capacity.sort((a,b)=>{return b-a;});

    let appleSize = apple.reduce( (a,b)=>{return a+b;});
    let box = 0;

    while(appleSize > 0){
        appleSize += -capacity[box];
        box++;
    }

    return box;
};