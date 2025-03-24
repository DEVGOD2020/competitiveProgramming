/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */

class unionFind{
    constructor(n){
        this.parent = _.range(n);
        this.size = new Array(n).fill(1);
    }

    find(node){
        if(this.parent[node] == node){
            return node;
        }
        this.parent[node] = this.find(this.parent[node]);
        return this.parent[node];
    }

    union(n1,n2){
        let root1 = this.find(n1);
        let root2 = this.find(n2);

        if(root1 == root2){
            return;
        }

        if( this.size[root1] > this.size[root2]){
            this.parent[root2] = root1;
            this.size[root1] += this.size[root2];
        }else{
            this.parent[root1] = root2;
            this.size[root2] += this.size[root1];
        }
    }
}

var countCompleteComponents = function(n, edges) {
    let myUnion = new unionFind(n);
    let edgeCountMap = new Map();
    for(let edge of edges){
        myUnion.union(edge[0],edge[1]);
    }

    for(let edge of edges){
        let root = myUnion.find(edge[0]);
        edgeCountMap.set(root, (edgeCountMap.get(root)|0) + 1);
    }

    let score = 0;
    for(let I = 0; I<n; I++){
        if(myUnion.find(I) == I){
            let nodeCount = myUnion.size[I];
            let expectedEdges = Math.floor(
                (nodeCount*(nodeCount-1))/2
            );

            if( (edgeCountMap.get(I)|0) === expectedEdges){
                score++;
            }
        }
    }

    return score;
};