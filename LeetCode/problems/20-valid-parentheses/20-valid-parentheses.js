/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for(let chr of s){
        if(stack[stack.length-1] == "(" && chr == ")"){stack.pop();}
        else if(stack[stack.length-1] == "{" && chr == "}"){stack.pop();}
        else if(stack[stack.length-1] == "[" && chr == "]"){stack.pop();}
        else{
            if(stack.length == 0 && ")}]".includes(chr) ){return false;}
            stack.push(chr);
        } 
    }
    return stack.length == 0;
};
