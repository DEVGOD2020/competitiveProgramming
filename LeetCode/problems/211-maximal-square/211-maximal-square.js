/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    let DP = Array.from(
        {length:matrix.length}, 
        ()=> new Array(matrix[0].length).fill(0)
    );

    let max = 0;
    for(let R = 0; R<matrix.length; R++){
        for(let C = 0; C<matrix[0].length; C++){
            if(R==0 || C==0){ 
                if(matrix[R][C] == "1"){
                    DP[R][C] = 1;
                    max = Math.max(max,1);
                }
            }
            else if(matrix[R][C] == "1"){
                DP[R][C] = Math.min( 
                    DP[R-1][C], 
                    DP[R][C-1], 
                    DP[R-1][C-1] 
                )+1;
                max = Math.max(max, DP[R][C] );
            }
        }
    }

    return max**2;
};
