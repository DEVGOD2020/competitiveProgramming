/**
 * @param {string} s
 * @return {number}
 */

var minFlips = function(s) {
    let A = 0;
    let B = 0;
    for(let I = 0; I<s.length; I++){
        if(s[I]== "0" && I%2==0){A++;}
        if(s[I] == "1" && I%2==1){A++;}
        if(s[I] == "1" && I%2==0){B++;}
        if(s[I] == "0" && I%2==1){B++;}
    }

    let score = Math.min(A,B);
    if(s.length%2 == 0){ return score; }

    for(let I = 0; I<s.length; I++){
        if(s[I] == "1"){[A,B] = [B-1,A+1];}
        if(s[I] == "0"){[A,B] = [B+1,A-1];}
        score = Math.min(score,A,B);
    }
    
    return score;
};
