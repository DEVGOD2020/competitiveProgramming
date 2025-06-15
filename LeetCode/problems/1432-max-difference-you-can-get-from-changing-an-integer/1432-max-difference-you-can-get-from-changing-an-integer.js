/**
 * @param {number} num
 * @return {number}
 */
var maxDiff = function(num) {
    let A = num.toString();
    let B = num.toString();

    for(let I = 0; I<A.length; I++){
        if(A[I] !== "9"){
            A = A.replaceAll(A[I],"9");
            break;
        }
    }

    for(let I = 0; I<B.length; I++){
        if(B[I] !== "1" && B[I] !== "0" && B[0] !== B[I]){
            B = B.replaceAll(B[I],"0");
            break;
        }
    }

    let B2 = num.toString().replaceAll(B[0],"1");
    B = Math.min( Number(B), Number(B2) );

    return Number(A) - Number(B);

};
