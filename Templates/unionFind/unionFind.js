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