/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function(s) {
    let mySet = new Set();
    let max = 0;
    let backtrack = function(L){
        if(L == s.length){
            return 0;
        }
        for(let R = L+1; R<=s.length; R++){
            let STR = s.slice(L,R);
            if(!mySet.has(STR)){
                mySet.add(STR);
                max = Math.max(max, mySet.size);
                backtrack(R);

                mySet.delete(STR);
            }
        }
    }

    backtrack(0);
    return max;
};