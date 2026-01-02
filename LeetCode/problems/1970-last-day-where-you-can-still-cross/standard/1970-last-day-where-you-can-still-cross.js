/**
 * @param {number} row
 * @param {number} col
 * @param {number[][]} cells
 * @return {number}
 */
var latestDayToCross = function(row, col, cells) {
    class UnionFind{
        constructor(){
            this.parent = _.range(0,row*col+1 );
            this.flood = new Array( row*col+1 ).fill(0);
            this.rank = Array.from( {length: row*col+1}, ()=>new Set() )
        }
        find(A){
            let root = this.parent[A];
            if(this.parent[root] !== root){
                return this.parent[A] = this.find(root);
            }
            return root;
        }
        union(A,B){
            const a = this.find(A);
            const b = this.find(B);

            if(a === b){ return; }

            if(this.rank[a].size < this.rank[b].size){
                this.parent[a] = b;
                this.rank[b] = this.rank[a].union(this.rank[b]);
            }else {
                this.parent[b] = a;
                this.rank[a] = this.rank[b].union(this.rank[a]);
            }
        }
        floodCell(R,C){
            this.flood[R*col + C] = 1;
            
            let ROOT = this.find(R*col+C);
            this.rank[ROOT].add( C );

            for(let RR = R-1; RR< R+2; RR++){
                for(let CC = C-1; CC< C+2; CC++){
                    if(RR >= 0 && CC >= 0 
                    && RR < row && CC < col){
                        if(this.flood[RR*col + CC] ){
                            this.union( R*col+C, RR*col+CC);
                            ROOT = this.find(R*col+C);
                            this.rank[ROOT].add( CC );
                            if( this.rank[ROOT].size == col){
                                return true;
                            }
                        }
                    }
                }
            }
            return false;
        }
    }

    let myUF = new UnionFind();
    let I = 1;
    for(let [R,C] of cells){
        R = R-1; C = C-1;
        if( myUF.floodCell(R,C) ){
            return I-1;
        }
        I++;
    }
};
