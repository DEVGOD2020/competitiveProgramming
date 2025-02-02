/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function(heightMap) {
    const alreadyWet = Array.from(
        { length: heightMap.length }, 
        () => Array(heightMap[0].length).fill(false)
    );
    const MinPQ = new MinPriorityQueue({ priority: (el) => el[0] });

    let dirs = [
        [-1,0],
        [1,0],
        [0,-1],
        [0,1]
    ];

    let waterScore = 0;

    for(let row = 0; row<heightMap.length; row++){
        for(let col=0; col<heightMap[0].length; col++){
            if(row == 0 || col == 0 || 
            row == heightMap.length-1 || 
            col == heightMap[0].length-1){
                MinPQ.enqueue( [heightMap[row][col],row,col] )
                alreadyWet[row][col] = true;
            }
        }
    }

    while(!MinPQ.isEmpty()){
        const [h, row, col] = MinPQ.dequeue().element;

        for(let [r,c] of dirs){
            if(row+r >= 0 && row+r < heightMap.length
            && col+c >= 0 && col+c < heightMap[0].length
            && !alreadyWet[row+r][col+c]){
                alreadyWet[row+r][col+c] = true;
                waterScore += Math.max(0, h-heightMap[row+r][col+c]);
                MinPQ.enqueue([
                    Math.max(h, heightMap[row+r][col+c]), 
                    row+r,
                    col+c
                ])
            }
        }
        
    }

    return waterScore;
};