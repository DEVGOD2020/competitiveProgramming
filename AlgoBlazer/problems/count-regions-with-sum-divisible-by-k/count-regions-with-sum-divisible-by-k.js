function countDivisibleRegions(grid, k) {
    class UnionFind{
        constructor(){
            this.parent = new Array(grid.length*grid[0].length).fill(0);
            this.sum = new Array(grid.length*grid[0].length).fill(0);
            for(let I = 0; I<grid.length*grid[0].length; I++){
                this.parent[I] = I;
                this.sum[I] = grid[Math.floor(I/grid[0].length)][I%grid[0].length]
            }
        }
        find(A){
            if(this.parent[A] != A){
                this.parent[A] = this.find(this.parent[A]);
            }
            return this.parent[A];
        }
        union(A,B){
            let rootA = this.find(A);
            let rootB = this.find(B);
            if(rootA != rootB){
                this.parent[rootA] = rootB;
                this.sum[rootB] += this.sum[rootA];
            }
        }
    }

    let myUF = new UnionFind();
    let mySet = new Set();
    const SIZE = grid[0].length;
    for(let A = 0; A<grid.length; A++){
        for(let B = 0; B<grid[0].length; B++){
            if(grid[A][B] > 0){
                if( (grid[A+1]?.[B]??0) > 0){
                    myUF.union(SIZE*A+B, SIZE*(A+1)+(B));
                }
                if( (grid[A]?.[B+1]??0) > 0){
                    myUF.union(SIZE*A+B, SIZE*(A)+(B+1));
                }
                mySet.add(myUF.find(SIZE*A+B));
            }
        }
    }

    let score = 0;
    for(let I = 0; I<grid.length*grid[0].length; I++){
        if(
            myUF.find(I) == I &&
            grid[Math.floor(I / SIZE)][I % SIZE] > 0 &&
            myUF.sum[I] % k == 0
        ){
            score++;
        }
    }
    return score;
}