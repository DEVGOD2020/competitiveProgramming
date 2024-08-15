/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let ans = [];
    for(let I = 0; I <= n; I++){
        ans.push(sumOfBits(I));
    }
    return ans;
};

function sumOfBits(A){
    if(A==0){return 0;}
    else if(A==1){return 1;}

    let sum = 0;
    const size = Math.floor(Math.log2(A))+1;
    for(let I = 0; I < size; I++){
        sum += (A>>I)&1;
    }

    return sum;
}