/**
 * @param {number[][]} stones
 * @return {number}
 */

class unionFind{
    constructor(n){
        this.parent = _.range(n);
        this.count = n;
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

        this.count += -1;
        this.parent[root1] = root2;
    }
}

var removeStones = function(stones) {
    let UF = new unionFind(stones.length);
    for(let I = 0; I<stones.length; I++){
        for(let J = I+1; J<stones.length; J++){
            if(stones[I][0] == stones[J][0] || stones[I][1] == stones[J][1]){
                UF.union(I,J);
            }
        }
    }

    return stones.length-UF.count;
};