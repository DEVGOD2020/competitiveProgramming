/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function(s, k) {
    if(k > 1){return s.split("").sort().join("");}

    let ans = s;
    for(let I = 1; I<s.length; I++){
        let temp = s.slice(I,s.length) + s.slice(0,I)
        if(ans > temp){
            ans = temp;
        }
    }

    return ans;
};
