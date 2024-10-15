/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let scoreOpen = 0;
    let scoreClose = 0;

    for(let I = 0; I<s.length; I++){
        const leftChar = s[I];
        const rightChar = s[s.length-1-I];

        if(leftChar == "("){
            scoreOpen++;
        }else if(scoreOpen > 0){
            scoreOpen--;
        }

        if(rightChar == ")"){
            scoreClose++;
        }else if(scoreClose > 0){
            scoreClose--;
        }
    }

    return scoreOpen+scoreClose;
};