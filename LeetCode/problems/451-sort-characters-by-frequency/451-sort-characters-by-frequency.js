/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let hash = {};
    for(let chr of s){
        if(hash[chr] === undefined){
            hash[chr] = 0;
        }
        hash[chr]++;
    }

    return s.split("").sort(
        function(a,b){
            if(hash[b] === hash[a]){
                return b.charCodeAt(0) - a.charCodeAt(0);
            }
            return hash[b] - hash[a]
        }).join("");
};