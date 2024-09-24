/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function(s, dictionary) {
    let memo = new Map();
    let dicSet = new Set(dictionary);
    let helper = function(n){
        if(n == s.length){ return 0; }
        if(memo.has(n)){
            return memo.get(n);
        }

        //Only on char left -> right, leaving a duplicate
        //Worse Case Senario
        let ans = helper(n+1)+1;
        
        //See if a word could be taken out instead
        for(let prefix = n; prefix<s.length; prefix++){
            let curr = s.slice(n,prefix+1);
            if(dicSet.has(curr)){
                //skip forward, best case senario
                ans = Math.min(ans, helper(prefix + 1) );
            }
        }

        memo.set(n,ans);
        return ans;
    }

    return helper(0);

};