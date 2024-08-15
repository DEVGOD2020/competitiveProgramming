/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    let stack = [];

    for(let c of s){

        if(stack[stack.length-1] !== c && stack[stack.length-1] == c.toUpperCase()){
            stack.pop();
        }

        else if(stack[stack.length-1] !== c && stack[stack.length-1] == c.toLowerCase()){
            stack.pop();
        }
        else{
            stack.push(c);
        }

    }

    let str = "";
    for(let a of stack){
        str += a;
    }
    return str;

    //console.log(stack);
};