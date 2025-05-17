/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getWordsInLongestSubsequence = function(words, groups) {
    let path = new Array(words.length).fill(-1);
    let DP = new Array(words.length).fill(1);

    function checkValid(L,R){
        if(words[L].length !== words[R].length || 
        groups[L] === groups[R]){
            return false;
        }
        let diff = 0;
        for(let I = 0; I<words[L].length; I++){
            if(words[L][I] !== words[R][I]){
                diff++;
            }
            if(diff > 1){
                return false;
            }
        }
        return diff === 1;
    }

    let point = 0;
    for(let R = 1; R<words.length; R++){
        for(let L = R-1; L>=0; L--){
            if(checkValid(L,R)){
                if( DP[L]+1 >= DP[R]){
                    DP[R] = DP[L]+1;
                    path[R] = L;
                }
            }
        }
        if(DP[R] > DP[point]){
            point = R;
        }
    }

    let ans = [];
    while(point >= 0){
        ans.push(words[point]);
        point = path[point];
    }
    ans.reverse();

    return ans;
};