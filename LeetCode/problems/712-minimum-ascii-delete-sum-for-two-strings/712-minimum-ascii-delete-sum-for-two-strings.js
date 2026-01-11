/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumDeleteSum = function(s1, s2) {
    let DP = Array.from( 
        {length:s1.length+1}, 
        ()=> new Array(s2.length+1).fill(1e9 + 7)
    );
    DP[0][0] = 0;
    for(let A = 0; A<=s1.length; A++){
        for(let B = 0; B<=s2.length; B++){
            if (A+B == 0){ continue; }

            if (A === 0) {
                DP[A][B] = DP[A][B-1] + s2.charCodeAt(B-1);
                continue;
            }

            if (B === 0) {
                DP[A][B] = DP[A-1][B] + s1.charCodeAt(A-1);
                continue;
            }

            if(s1[A-1] == s2[B-1]){ 
                DP[A][B] = DP[A-1][B-1];
                continue;
            }
            
            DP[A][B] = Math.min( 
                s1.charCodeAt(A-1)+DP[A-1][B],
                s2.charCodeAt(B-1)+DP[A][B-1]
            );
        }
    }
    return DP[s1.length][s2.length];
};
