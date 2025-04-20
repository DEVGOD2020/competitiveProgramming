/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
    let freqMap = new Map();
    for(let ans of answers){
        freqMap.set(ans, (freqMap.get(ans)||0)+1);
    }

    let ans = 0;
    for(let [key,val] of freqMap.entries()){
        let rem = val%( (Number(key)+1) );
        ans += val;
        if(rem !== 0){
            ans += (Number(key)+1)-rem
        }
    }
    return ans;
};