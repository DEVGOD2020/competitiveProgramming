/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numberOfSubstrings = function(s, k) {
    let ans = 0;
    for(let L = 0; L<s.length; L++){
        let myMap = new Map();
        for(let R = L; R<s.length; R++){
            myMap.set( s[R], (myMap.get(s[R])|0) +1 );
            if(myMap.get( s[R]) >= k){
                ans += s.length-R;
                break;
            }
        }
    }

    return ans;
};