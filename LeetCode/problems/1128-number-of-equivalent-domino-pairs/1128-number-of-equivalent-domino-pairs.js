/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    let myMap = new Map();
    let ans = 0;
    for(let dom of dominoes){
        let key = (1<<dom[0]) | (1<<dom[1]);
        ans += myMap.get(key)|0;
        myMap.set(key, (myMap.get(key)|0) +1);
    }

    return ans;
};