/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let A = 0;
    let B = 0;
    for(let I = 0; I<s.length; I++){
        if(s[I]== "0" && I%2==0){A++;}
        if(s[I] == "1" && I%2==1){A++;}
        if(s[I] == "1" && I%2==0){B++;}
        if(s[I] == "0" && I%2==1){B++;}
    }
    return Math.min(A,B);
};
