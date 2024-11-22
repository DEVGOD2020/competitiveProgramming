/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    let temp = new Array(code.length).fill(0);
    if(k==0){return temp;}
    for(let I = 0; I<code.length; I++){
        if(k > 0){
            for(let a = 1; a<=k; a++){
                let sumIndex = ((I+a)%code.length);
                temp[I] += code[sumIndex];
            }
        }else{
            for(let a = k; a<0; a++){
                let sumIndex = ((I+a)+code.length)%code.length;
                temp[I] += code[sumIndex];
            }
        }
    }

    return temp;
};