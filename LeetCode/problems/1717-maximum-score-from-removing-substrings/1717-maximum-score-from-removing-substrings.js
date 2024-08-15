/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function(s, x, y) {
    let stack = [];
    let score = 0;
    if(x<y){
        for(let chr of s){
            stack.push(chr);
            while(stack[stack.length-2] === 'b' && stack[stack.length-1] === 'a'){
                stack.pop();
                stack.pop();
                score += y;
            }
        }

        let newStack = [];
        for(let el of stack){
            newStack.push(el);
            while(newStack[newStack.length-2] === 'a' && newStack[newStack.length-1] === 'b'){
                newStack.pop();
                newStack.pop();
                score += x;
            }
        }
    }

    if(x>y){
        for(let chr of s){
            stack.push(chr);
            while(stack[stack.length-2] === 'a' && stack[stack.length-1] === 'b'){
                stack.pop();
                stack.pop();
                score += x;
            }
        }

        let newStack = [];
        for(let el of stack){
            newStack.push(el);
            while(newStack[newStack.length-2] === 'b' && newStack[newStack.length-1] === 'a'){
                newStack.pop();
                newStack.pop();
                score += y;
            }
        }
    }

    return score;
};