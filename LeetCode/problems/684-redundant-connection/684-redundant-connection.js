/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    class unionFind{
        constructor(){
            this.parent = _.range(1000);
            this.rank = new Array(1000).fill(0);
            this.uwu = null;
        }
        find(node){
            if(this.parent[node] !== node){
                return this.find(this.parent[node]);
            }
            return this.parent[node];
        }
        union(A,B){
            let nodeA = this.find(A);
            let nodeB = this.find(B);

            if(nodeA !== nodeB){
                if(this.rank[nodeA] > this.rank[nodeB]){
                    this.parent[nodeB] = nodeA;
                }
                else if(this.rank[nodeA] < this.rank[nodeB]){
                    this.parent[nodeA] = nodeB;
                }else{
                    this.parent[nodeA] = nodeB;
                    this.rank[nodeA]++;
                }
                return true;
            }else{
                this.uwu = [A,B];
                return false;
            }
        }
    }

    let myUF = new unionFind();
    for(let edge of edges){
        if( !myUF.union(edge[0],edge[1]) ){
            return myUF.uwu;
        }
    }
    
    return -1;
};