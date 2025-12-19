/**
 * @param {number} n
 * @param {number[][]} meetings
 * @param {number} firstPerson
 * @return {number[]}
 */
var findAllPeople = function(n, meetings, firstPerson) {
    class UnionFind{
        constructor(){
            this.parent = _.range(0,n+1);
            this.rank = new Array(n+1).fill(0);
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

            if(this.rank[a] < this.rank[b]){
                this.parent[a] = b;
            }else if(this.rank[a] > this.rank[b]){
                this.parent[b] = a;
            }else {
                this.parent[b] = a
                this.rank[a]++;
            }
        }
        checkEdge(A,B){
            return this.find(A) === this.find(B);
        }
        reset(A){
            this.parent[A] = A;
            this.rank[A] = 0;
        }
    }

    let myUF = new UnionFind();
    myUF.union(0,firstPerson);

    meetings = meetings.sort( (a,b)=> a[2]-b[2] );

    let prevI = 0;
    let I = 0;
    let prevTime = meetings[0][2];
    for(let [X,Y,time] of meetings){
        //Fix past mistakes
        if(time != prevTime){
            for(let A = prevI; A<I; A++){
                let [X,Y,blah] = meetings[A];
                if( !myUF.checkEdge(X,0)){
                    myUF.reset(X);
                    myUF.reset(Y);
                }
            }
            prevI = I;
            prevTime = time;
        }
        
        myUF.union(X,Y);
        I++;
    }

    let arr = [0];
    for(let I = 1; I<n; I++){
        if( myUF.checkEdge(I,0) ){
            arr.push(I);
        }
    }

    return arr;
};
