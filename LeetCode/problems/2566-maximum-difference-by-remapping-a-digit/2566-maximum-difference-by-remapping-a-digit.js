/**
 * @param {number} num
 * @return {number}
 */
var minMaxDifference = function(num) {
    let A = num.toString();
    let B = num.toString();

    let I = 0;
    while(I<A.length){
        if(A[I] !== "9"){
            A = A.replaceAll(A[I],"9");
            break;
        }
        I++;
    }

    B = B.replaceAll(B[0],"0");

    return Number(A) - Number(B);
};
