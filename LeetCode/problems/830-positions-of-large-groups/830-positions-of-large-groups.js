/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    let ans = [];

    let L = 0;
    for(let R = 0; R<s.length; R++){
        if(s[R] !== s[R+1]){
            if(R-L+1 >= 3){
                ans.push([L,R]);
            }
            L = R+1;
        }
    }
    return ans;
};