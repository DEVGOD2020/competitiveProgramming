/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let stack = [];
    let max = 0;
    for(c of s){
        if(c==='('){
            stack.push(c);
        }
        if(c===')'){
            stack.pop();
        }
        if(stack.length > max){
            max = stack.length;
        }
    }
    return max;
};