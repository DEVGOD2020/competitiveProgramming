/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    let open = [];
    let pair = new Array(s.length).fill(0);
    for(let I = 0; I<s.length; I++){
        if(s[I] == "("){open.push(I);}
        if(s[I] == ")"){
            let A = open.pop();
            pair[I] = A;
            pair[A] = I;
        }
    }

    let res = "";
    let I = 0;
    let dir = 1;
    while(I<s.length){
        if(s[I] == "(" || s[I] == ")"){
            I = pair[I];
            dir = -dir;
        }else{
            res += s[I];
        }
        I += dir;
    }
    return res;
};