/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let stack = [];

    for(let c=0; c<s.length; c++){
        if(s[c] === "("){
            stack.push([ s[c], c ]);
        }

        if(s[c] === ")"){
            let val = stack[stack.length-1]
            if(val && val[0] === "("){ stack.pop();}
            else{ stack.push([ s[c],c ]); }
        }
    }

    
    myStr = "";
    for(let I = 0; I<s.length; I++){
        if(!stack[0] || I !== stack[0][1]){
            myStr += s[I];
        }else{
            stack.shift();
        }
    }

    
    
    return myStr;
};