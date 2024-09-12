/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let oppsite = {"(":")","[":"]","{":"}"}
    for(let chr of s){
        if("({[".includes(chr)){
            stack.push(oppsite[chr]);
        }
        if(")}]".includes(chr)){
            if(stack.pop() !== chr){
                return false;
            }
        }
    }

    return stack.length==0;
};