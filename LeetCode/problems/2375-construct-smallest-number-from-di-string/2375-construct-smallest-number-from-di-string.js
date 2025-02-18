/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function(pattern) {
    let digits = [1,2,3,4,5,6,7,8,9];
    let ans = new Array(pattern.length+1).fill(-1);
    let visit = 0;
    let backtrack = function(I=0){
        if(I === pattern.length+1){
            return true;
        }

        for(let d of digits){
            if(visit & (1<<d) ){continue;}
            
            if( I > 0 && pattern[I-1] === 'D' && d >= ans[I-1]){continue;}
            if(I > 0 && pattern[I-1] === 'I' && d <= ans[I-1]){continue;}
            ans[I] = d;
            visit ^= (1<<d);
            if( backtrack(I+1) ){
                return ans;
            }

            ans[I] = -1;
            visit ^= (1<<d);
        }
        
        return false;
    }

    backtrack();

    return ans.join("");
};