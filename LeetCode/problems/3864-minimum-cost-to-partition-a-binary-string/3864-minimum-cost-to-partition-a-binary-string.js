/**
 * @param {string} s
 * @param {number} encCost
 * @param {number} flatCost
 * @return {number}
 */
var minCost = function(s, encCost, flatCost) {
    let pSum = [0];
    for(let chr of s){
        if(chr == "1"){
            pSum.push(pSum[pSum.length-1] + 1);
        }else{
            pSum.push(pSum[pSum.length-1]);
        }
    }

    let blah = function(L,R){
        if( L == R ){
            if(s[L] == "1"){ return encCost; }
            return flatCost;
        }

        let val = Infinity;
        if( (R-L+1)%2 == 0){
            const M = Math.floor((L+R)/2);
            val = Math.min(val, blah(L, M) + blah(M+1, R));
        }
        
        const ones = pSum[R+1]-pSum[L];
        if(ones == 0){ return Math.min(val, flatCost); }
        return Math.min(val, ones*(R-L+1)*encCost)
    }

    return blah(0,s.length-1);
};
