/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    let DP = Array.from({length: s.length}, ()=> new Array(t.length).fill(0));
    for(let T = 0; T<t.length; T++){
        for(let S = 0; S<s.length; S++){
            if(T == 0){
                DP[S][T] = (DP[S-1]?.[T]??0)+((t[T]==s[S])?1:0)
            }else{
                if(s[S] == t[T] ){
                    DP[S][T] = (DP[S-1]?.[T-1]??0)+(DP[S-1]?.[T]??0);
                }else{
                    DP[S][T] = DP[S-1]?.[T]??0;
                }
            }
        } 
    }
    return DP[s.length-1][t.length-1];
};