/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function(n, edges, distanceThreshold) {
    
    let adj = {};
    for(let I = 0; I<n; I++){
        adj[I] = [];
    }

    for(let [start,end,weight] of edges){
        adj[start].push([end,weight]);
        adj[end].push([start,weight]);
    }

    //Dijk
    let shortest = new Map();
    let minHeap = new MinPriorityQueue();

    let start = 0;
    minHeap.enqueue(start,0);

    while(!minHeap.isEmpty()){
        let popNode = minHeap.dequeue();
        let N1 = popNode['element'];
        let W1 = popNode['priority'];

        if(shortest.has(N1)){ continue; }

        shortest.set(N1,W1);

        if(adj[N1] == null){continue;}
        for(let [N2, W2] of adj[N1]){
            if( !shortest.has(N2)){
                minHeap.enqueue(N2,W1+W2);
            }
        }
    }

    console.log(adj);
    console.log(shortest);
};