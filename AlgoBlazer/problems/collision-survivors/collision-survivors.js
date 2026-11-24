function collisionSurvivors(values) {
    let stack = [];
    for(let val of values){
        while(stack.length && stack.at(-1) <= Math.abs(val) && val < 0 && stack.at(-1) > 0){
            stack.pop();
        }
        if(stack.length && stack.at(-1) == Math.abs(val) && val < 0 && stack.at(-1) > 0){
            stack.pop();
        }
        else if(stack.length && stack.at(-1) > Math.abs(val) && val < 0 && stack.at(-1) > 0){
            
        }
        else{stack.push(val);}
    }
    return stack;
}