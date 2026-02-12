/**
 * @param {string} s
 * @return {number}
 */
var longestBalanced = function(s) {
    if(s.length == 1){return 1;}
    let score = 0;
    for(let L = 0; L<s.length; L++){
        let arr = new Array(26).fill(0);
        arr[ s.charCodeAt(L) - 97 ]++;
        for(let R = L+1; R<s.length; R++){
            arr[ s.charCodeAt(R) - 97 ]++;
            if( 
                arr.every( 
                    (el)=> el == 0 || el == arr[ s.charCodeAt(L) - 97 ] 
                ) 
            ){
                score = Math.max(score, R-L+1);
            }
        }
    }
    return score;
};
