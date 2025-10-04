/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function(heightMap) {
    const N = heightMap.length;
    const M = heightMap[0].length;
    let score = 0;

    function checkBounds(row,col){
        return row >= 0 && col >= 0 && row < N && col < M;
    }

    let minPQ = new MinPriorityQueue( (el)=> el[1] );
    for(let row = 0; row<N; row++){
        for(let col = 0; col<M; col++){
            if(row == 0 || col == 0 || row == N-1 || col == M-1){
                minPQ.enqueue([ [row,col], heightMap[row][col] ]);
                heightMap[row][col] = -1;
            }
        }
    }

    while(!minPQ.isEmpty()){
        let [cord,h] = minPQ.dequeue();
        let [row,col] = cord;
        let dirs = [ 
            [row-1,col],
            [row+1,col],
            [row,col-1],
            [row,col+1] 
        ];

        for(let [newRow,newCol] of dirs){
            if(checkBounds(newRow,newCol) && heightMap[newRow][newCol] !== -1){
                if( h >= heightMap[newRow][newCol]){
                    score += h - heightMap[newRow][newCol];
                }
                minPQ.enqueue([ [newRow,newCol], 
                Math.max(h, heightMap[newRow][newCol]) ]
                );
                heightMap[newRow][newCol] = -1;
            }
        }
    }

    return score;
};
