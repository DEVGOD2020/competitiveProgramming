/**
 * @param {string} s
 * @return {number}
 */
var maxActiveSectionsAfterTrade = function(s) {
    let left = [];
    let right = [];
    let ones = [0];
    let minScore = 0;
    for(let I = 0; I<s.length;I++){
        if(s[I] == "0" && (s[I-1] == "1" || I==0)){
            left.push(I);
            ones.push(0);
        }
        if(s[I] == "0" && (s[I+1] == "1" || I==s.length-1)){
            right.push(I);
        }
        if(s[I] == "1"){
            minScore++;
            ones[left.length]++;
        }
    }

    let ans = minScore;
    for(let I = 0; I<left.length-1; I++){
        ans = Math.max(ans, 
        (minScore-ones[I+1]) + (right[I+1]-left[I]+1)
        )
    }
    return ans;
};