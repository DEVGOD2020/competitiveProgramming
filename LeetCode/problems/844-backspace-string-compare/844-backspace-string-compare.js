/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let stack1 = [];
    let stack2 = [];

    const N = Math.max(s.length, t.length);
    for(let I = 0; I<N; I++){
        if(I < s.length){
            s[I] === "#" ? stack1.pop() : stack1.push(s[I]);
        }
        if(I < t.length){
            t[I] === "#" ? stack2.pop() : stack2.push(t[I]);
        }
    }
    return stack1.join("") === stack2.join("");
};
