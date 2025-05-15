/**
 * @param {number[][]} moveTime
 * @return {number}
 */
var minTimeToReach = function(moveTime) {
    let times = Array.from(
        {length:moveTime.length},
        ()=>new Array(moveTime[0].length).fill(Infinity)
    );
    times[0][0] = 0;
    const visit = new Set();
    let minPQ = new MinPriorityQueue( (el)=>el[0] );
    
    minPQ.enqueue([moveTime[0][0], [0,0], false])

    while(!minPQ.isEmpty()){
        let node = minPQ.dequeue();

        if(visit.has( `${node[1]}` )){
            continue;
        }
        visit.add(`${node[1]}`)
        
        let nodeX = node[1][0];
        let nodeY = node[1][1];
        
        if(nodeX === moveTime.length-1 && nodeY === moveTime[0].length-1){
            break;
        }

        let dirs = [ 
            [nodeX-1,nodeY],
            [nodeX,nodeY-1],
            [nodeX+1,nodeY],
            [nodeX,nodeY+1],
        ];

        for(let [X,Y] of dirs){
            let neighborT = moveTime[X]?.[Y];
            if(neighborT === undefined){ continue; }

            let newT = Math.max(times[nodeX][nodeY], neighborT)+1+(node[2]);
            
            if(newT < times[X][Y]){
                times[X][Y] = newT;
                minPQ.enqueue(
                    [ newT , [ X,Y ], !node[2] ]
                )
            }
            
        }     
    }

    return times[moveTime.length-1][moveTime[0].length-1];
};