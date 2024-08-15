/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = s.split("");
    let stack = [];

    while(arr.length > 0){
        stack.push(arr.shift());
        let ID = stack.length-1;
        while(stack[ID-1] == "(" && stack[ID] == ")"){
            stack.pop(); stack.pop();
        }
        while(stack[ID-1] == "[" && stack[ID] == "]"){
            stack.pop(); stack.pop();
        }
        while(stack[ID-1] == "{" && stack[ID] == "}"){
            stack.pop(); stack.pop();
        }
    }

    return stack.length==0;
};