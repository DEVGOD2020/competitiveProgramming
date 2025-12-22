/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    const N = strs[0].length;

    let lis = Array(N).fill(1);

    for (let R = 1; R < N; R++) {
        for (let L = 0; L < R; L++) {
            let check = strs.every( 
              (el,row)=> strs[row][R] >= strs[row][L]
            );
            if ( check ) {
                lis[R] = Math.max(lis[R], lis[L] + 1);
            }
        }
    }
    return N - Math.max( ...lis );
};
