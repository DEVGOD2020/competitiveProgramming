/**
 * @param {string} s
 * @return {string}
 */
var clearStars = function(s) {
    //Smallest letter, largest index
    let PQ = new PriorityQueue((a, b) =>{
        if(a[0]<b[0]){ return -1; }
        if(a[0]>b[0]){ return 1; }

        return a[1] > b[1] ? -1 : 1;
    });
    
    let stack = [];
    for(let I = 0; I<s.length; I++){
        if(s[I] !== "*"){
            PQ.enqueue([s[I],I])
            stack.push(s[I]);
            continue;
        }
        let blah = PQ.dequeue();
        stack[blah[1]] = undefined;
        stack.push(undefined);
    }
    return stack.filter((el)=>el !== undefined).join("");
};
