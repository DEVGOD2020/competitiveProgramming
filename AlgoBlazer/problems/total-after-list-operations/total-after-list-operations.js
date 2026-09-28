function totalAfterOperations(operations) {
    let stack = [];
    for(let chr of operations){
        if(chr == "+"){
            stack.push(stack[stack.length-1] + stack[stack.length-2]);
        }
        else if(chr == "D"){
            stack.push(stack[stack.length-1]*2);
        }
        else if(chr == "C"){
            stack.pop();
        }
        else{
            stack.push(Number(chr));
        }
    }
    return stack.reduce( (sum,el)=>sum+el, 0);
}
