/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    let mySet = new Set(A);
    let ans = new Array(A.length).fill(0);
    for(let I = A.length-1; I>=0; I--){
        ans[I] = mySet.size;
        mySet.delete(A[I]);
        mySet.delete(B[I]);
        
    }
    return ans;
};
