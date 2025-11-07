/**
 * @param {number} c
 * @param {number[][]} connections
 * @param {number[][]} queries
 * @return {number[]}
 */

class unionFind{
    constructor(n){
        this.parent = _.range(0,n+1);
        this.stat = new Array(n+1).fill(true);
        this.rank = new Array(n+1).fill(0);
    }
    find(A){
        if(this.parent[A] === A){
            return A;
        }
        this.parent[A] = this.find(this.parent[A]);
        return this.parent[A];
    }
    union(A,B){
        let a = this.find(A);
        let b = this.find(B);
        if(a !== b){
            if(this.rank[a] < this.rank[b]){
                [a,b] = [b,a];
            }
            this.parent[b] = a;
            if(this.rank[a] == this.rank[b]){
                this.rank[a]++;
            }
        }
    }
}

var processQueries = function(c, connections, queries) {
    let myUF = new unionFind(c);
    let myMap = new Map();
    let ans = [];
    for(let [A,B] of connections){
        myUF.union(A,B);
    }

    for(let I = 0; I<=c; I++){
        let p = myUF.find(I);
        if(!myMap.has(p)){
            myMap.set(p, new MinPriorityQueue() );
        }
        myMap.get(p).push(I);
    }

    for(let [A,B] of queries){
        if(A == 2){
            myUF.stat[B] = false;
        }

        if(A==1){
            if(myUF.stat[B]){
                ans.push(B);
            }else{
                let PQ = myMap.get( myUF.find(B) );
                while(PQ && PQ.size() && !myUF.stat[PQ.front()]){
                    PQ.pop();
                }
                if(PQ && PQ.size() > 0){
                    ans.push(PQ.front());
                }else{
                    ans.push(-1);
                }
            }
        }
    }
    
    return ans;
};
