/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function(fruits, baskets) {
    class seggsTree{
        constructor(){
            this.seg = new Array(4*fruits.length).fill(0);
            this.build(0,fruits.length-1,1);
        }
        build(L,R,pos){
            if(L==R){
                this.seg[pos] = baskets[L];
                return;
            }
            let M = Math.floor((L+R)/2);
            this.build(L,M,2*pos);
            this.build(M+1,R,2*pos + 1);
            this.seg[pos] = Math.max(
                this.seg[pos*2],
                this.seg[2*pos + 1]
            );
        }
        leftBucket(node,L=0,R=fruits.length-1,pos=1){
            if(L==R){
                if(fruits[node] <= this.seg[pos]){
                    this.seg[pos] = 0;
                    return true;
                }
                return false;
            }
            let M = Math.floor((L+R)/2);
            let result = false;

            if(this.seg[2*pos] >= fruits[node] ){
                result = this.leftBucket(node,L,M,2*pos);
            }
            if(!result && this.seg[2*pos + 1] >= fruits[node] ){
                result = this.leftBucket(node,M+1,R,2*pos+1);
            }

            this.seg[pos] = Math.max(
                this.seg[pos*2],
                this.seg[2*pos + 1]
            );
            return result;
        }
    }

    let seggs = new seggsTree();
    let ans = 0;
    for(let I =0; I<fruits.length; I++){
        if( !seggs.leftBucket(I)){
            ans++;
        }
    }

    return ans;
};
