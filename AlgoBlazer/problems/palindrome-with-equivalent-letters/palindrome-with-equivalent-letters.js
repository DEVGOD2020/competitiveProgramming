class UnionFind{
    constructor(){
        this.arr = new Array(26);
        for(let I = 0; I<=26; I++){
            this.arr[I] = I;
        }
    }
    find(A){
        if(A?.length){A = A.charCodeAt(0)-97;}
        if(A==this.arr[A]){return this.arr[A];}
        this.arr[A] = this.find(this.arr[A]);
        return this.arr[A];
    }
    union(A,B){
        let rootA = this.find(A);
        let rootB = this.find(B);
        if(rootA == rootB){return;}
        this.arr[rootA] = rootB;
    }
}

function isEquivalentPalindrome(s, pairs) {
    let myUF = new UnionFind();
    for(let [A,B] of pairs){
        myUF.union(A,B);
    }

    let L = 0;
    let R = s.length-1;
    while(L<R){
        if( myUF.find(s[L]) !== myUF.find(s[R]) ){
            return false;
        }
        L++;
        R--;
    }
    return true;
}