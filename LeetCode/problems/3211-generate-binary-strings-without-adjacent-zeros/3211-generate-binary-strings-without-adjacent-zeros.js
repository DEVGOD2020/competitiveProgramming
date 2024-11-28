/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function(n) {
    let ans = [];

    let backtrack = function(state){
        if(state.length >= 2){
            if(state[state.length-1] == "0" && state[state.length-2] == "0"){
                return 0;
            }
        }

        if(state.length >= n){
            ans.push(state);
            return 0;
        }

        for(let el of "01"){
            state = state+el;
            backtrack(state);
            state = state.slice(0,state.length-1);
        }
    }

    backtrack("");
    return ans;
};
