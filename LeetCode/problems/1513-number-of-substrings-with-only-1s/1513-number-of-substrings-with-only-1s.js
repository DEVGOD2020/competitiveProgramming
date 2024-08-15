/**
 * @param {string} s
 * @return {number}
 */
var numSub = function(s) {
    let count = 0;
    let ans = 0
    for(let I = 0; I<s.length; I++){
        if(s[I] === "1"){
            count++;
        }else{
            ans += (count*(count+1))/2;
            count = 0;
        }
    }
    
    ans += (count*(count+1))/2;
    count = 0;
    
    return ans% (10**9 + 7);
};