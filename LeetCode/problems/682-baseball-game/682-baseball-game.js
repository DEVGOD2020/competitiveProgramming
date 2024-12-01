
/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let stack = [];
    for(let op of operations){
        if( /[0-9]/.test(op)){
            stack.push(Number(op));
        }
        if(op === "C"){
            stack.pop();
        }
        if(op == "D"){
            stack.push(stack[stack.length-1]*2);
        }
        if(op === "+"){
            let val = stack[stack.length-1]+stack[stack.length-2];
            stack.push(val);
        }
    }
    return _.sumBy(stack);
};

