function smallestDistinctSubsequence(s) {
    let stack = [];
    let count = new Array(26).fill(0);
    for(let I = 0; I<s.length; I++){count[s.charCodeAt(I)-97]++;}

    let mySet = new Set()
    for(let I = 0; I<s.length; I++){
        count[ s.charCodeAt(I)-97 ]--;
        if( mySet.has(s[I]) ){continue;}
        while(stack.length && s[I]<stack.at(-1) && count[stack.at(-1).charCodeAt(0)-97]>0){
            mySet.delete(stack.pop());
        }
        stack.push( s[I] );
        mySet.add(s[I]);
    }
    return stack.join("");
}