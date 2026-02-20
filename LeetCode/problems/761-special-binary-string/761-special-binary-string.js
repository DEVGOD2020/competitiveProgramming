/**
 * @param {string} s
 * @return {string}
 */
var makeLargestSpecial = function(s) {
    let solve = function(s){
        let ans = [];
        if(s.length == "()"){return s;}
        let score = 0;
        let temp = "";
        for(let I = 0; I<s.length; I++){
            temp += s[I];
            score += s[I]=="1"?1:-1;
            if(score == 0){
                ans.push( 
                    "1"+solve(temp.slice(1,temp.length-1))+"0" 
                );
                temp = "";
            }
        }
        return ans.sort().reverse().join("");
    }

    return solve(s);
};
