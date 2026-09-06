function minNewEdges(n, edges) {
    class unionFind{
        constructor(){
            this.parent = new Array(n+1).fill(0);
            this.rank = new Array(n+1).fill(1);
            for(let I = 0; I<=n; I++){
                this.parent[I] = I;
            }
            this.groups = n;
        }
        find(A){
            while(this.parent[A] !== A){
                this.parent[A] = this.parent[this.parent[A]];
                A = this.parent[A];
            }
            return A;
        }
        union(A,B){
            let rootA = this.find(A);
            let rootB = this.find(B);
            if(rootA == rootB){return;}
            if(this.rank[rootA] < this.rank[rootB]){
                this.parent[rootA] = rootB;
                this.rank[rootB]++;
                this.groups--;
            }else{
                this.parent[rootB] = rootA;
                this.rank[rootA]++;
                this.groups--;
            }
        }
    }

    let myUF = new unionFind();
    for(let [A,B] of edges){
        myUF.union(A,B);
    }
    
    return myUF.groups-1;
}
