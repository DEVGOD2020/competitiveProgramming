/**
 * @param {string} s
 * @return {boolean}
 */

//"(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())"
var checkValidString = function(s) {
    
    const openStack = [];
    const starStack = [];
    
    for(let i = 0; i < s.length; i++) {
        
        if(s[i] === '(') {
            openStack.push(i);
        } else if (s[i] === '*') {
            starStack.push(i);
        } else {
            if(openStack.length > 0) {
                openStack.pop();
            } else if(starStack.length > 0) {
                starStack.pop();
            } else {
                return false;
            }
        }
    }

    let i = openStack.length - 1;
    let j = starStack.length - 1;
    
    while(openStack[i] < starStack[j]) {
        openStack.pop();
        starStack.pop();
        i--;
        j--;
    }
    
   return openStack.length === 0;
};