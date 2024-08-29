/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    
    if(s.length < 2){
        return "";
    }

    let stack = [-1];
    let max = 0;
    for(let I = 0; I<s.length; I++){
        if(s[I] === "("){
            stack.push(I);
        }else{
            stack.pop();
            if(stack.length === 0){
                stack.push(I)
            }else{
                max = Math.max(max, I-stack[stack.length-1]);
            }
        }
    }

    return max;
};