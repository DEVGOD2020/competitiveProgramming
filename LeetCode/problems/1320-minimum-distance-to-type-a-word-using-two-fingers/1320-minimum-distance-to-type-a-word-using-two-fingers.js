/**
 * @param {string} word
 * @return {number}
 */
var minimumDistance = function(word) {
    let memo = new Map();

    let dist = function(A,B){
        A = word.charCodeAt(A);
        B = word.charCodeAt(B);
        return Math.abs( ((A-65)%6) - ((B-65)%6) ) +
        Math.abs( Math.floor((A-65)/6) - Math.floor((B-65)/6) );
    }

    let blah = function(I=1,A=0,B=-1){
        const key = I+301*A+90601*B;
        if(memo.has(key)){ return memo.get(key); }

        if(I >= word.length){ return 0; }

        let fingerA = dist(A,I) + blah(I+1,I,B);

        let fingerB = blah(I+1,A,I);
        if(B>0){ fingerB += dist(B,I); }

        let ans = Math.min( fingerA, fingerB);
        memo.set(key,ans);
        return ans;
    }
    return blah();
};
