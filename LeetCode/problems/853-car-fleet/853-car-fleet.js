/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    const stack = [];
    
    let cars = _.zip(position,speed);
    cars = _.sortBy(cars,[0])

    for(let [P,S] of cars){
        let val = (target-P)/S;
        while(stack.length && stack[stack.length - 1] <= val ){
            stack.pop();
        }
        stack.push(val);
    }

    return stack.length;
};