/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let L = 1;
        let R = n-1;
        let M = 0;
        
        while(L<=R){
            M = Math.floor((L+R)/2);
            if(isBadVersion(M) == true && isBadVersion(M-1) === false){return M;}
            
            else if ( isBadVersion(M) == false){
                L = M+1;
            } else{
                R = M-1;
            }
        }

        return L;
    };
};