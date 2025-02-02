/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function(s, k) {
    if(s.length < k){
        return false;
    }

    let count = _.countBy(s);
    let score = _.sumBy( _.values(count).map( (el)=> el%2==1?1:0) );
    
    return score <= k;
};