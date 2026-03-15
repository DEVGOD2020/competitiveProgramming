/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {
    let ans = "";
    let count = 0;
    let backtrack = function(I=0,res=""){
        if(count==k){return;}
        if(I==n){
            ans = res;
            count++;
            return;
        }
        for(let chr of "abc"){
            if(I==0 || res[I-1]!=chr){
                res += chr;
                backtrack(I+1,res);
                res = res.slice(0,res.length-1);
            }
        }
    }
    backtrack()
    return count==k?ans:"";
};
