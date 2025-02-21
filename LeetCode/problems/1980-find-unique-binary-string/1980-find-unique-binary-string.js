/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    let mySet = new Set( ...[nums.map((el)=>parseInt(el,2))] );

    let state = 0;
    let backtrack = function(I=0){
        if(I < nums.length){
            if(!mySet.has(state)){
                return true;
            }
        }
        if(I == nums.length){
            return !mySet.has(state)
        }

        state ^= (1 << I);
        if(backtrack(I+1)){return true;}

        state ^= (1 << I);
        if(backtrack(I+1)){return true;}

        return false;
    }

    backtrack();

    return state.toString(2).padStart(nums.length,"0");;
};