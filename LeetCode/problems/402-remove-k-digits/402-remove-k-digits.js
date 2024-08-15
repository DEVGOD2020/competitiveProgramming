/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let stackSize = num.length-k;
    let myStack = [];


    //1432219
    //[1432] + 219

    for(let A of num){
        A = parseInt(A);
        while(k > 0 && myStack.length && A<myStack[myStack.length-1]){
            myStack.pop();
            k--;
        }
        myStack.push(A);
    }
    while(k > 0){
        myStack.pop();
        k--;
    }

    while(myStack[0] == 0){
        myStack.shift();
    }

    if(myStack.length == 0){return "0";}

    return myStack.join("");

};