/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function(grid) {
    class unionFind{
        constructor(){
            this.parent = _.range(grid.length*grid[0].length);
            this.fish = _.flatten(grid);
            this.rank = new Array(grid.length*grid[0].length).fill(0);
        }

        find(node){
            if(this.parent[node] !== node){
                this.parent[node] = this.find( this.parent[node] );
            }
            return this.parent[node];
        }

        addFish(A,B){
            let temp = this.fish[A];
            this.fish[A] += this.fish[B];
            this.fish[B] += temp;
        }

        union(A,B){
            const root1 = this.find(A);
            const root2 = this.find(B);

            if(root1 !== root2){
                if(this.rank[root1] > this.rank[root2]){
                    this.parent[root2] = root1;
                }else if(this.rank[root1] < this.rank[root2]){
                    this.parent[root1] = root2;
                }else{
                    this.parent[root1] = root2;
                    this.rank[root2]++;
                }
                this.addFish(root1,root2);
            }
        }
    }

    function checkBounds(row,col){
        return row >= 0 && col >= 0 
        && row < grid.length && col < grid[0].length 
        && grid[row][col] > 0;
    }

    function ID(row,col){
        return row*grid[0].length+col;
    }

    let myUF = new unionFind();
    let dirs = [ [-1,0], [1,0], [0,-1], [0,1] ];
    for(let row = 0; row<grid.length; row++){
        for(let col = 0; col<grid[0].length; col++){
            if(checkBounds(row,col)){
                for(let [NR,NC] of dirs){
                    if( checkBounds(row+NR,col+NC) ){
                        myUF.union(
                            ID(row,col), 
                            ID(row+NR,col+NC)
                        )
                    }
                }
            }
        }
    }

    return Math.max(...myUF.fish);
};