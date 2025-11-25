/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function(k) {
    let state = 1;
    let mySet = new Set();
    let len = 0;
    while(!mySet.has(state)){
        mySet.add(state);
        if(state%k == 0){return len+1;}
        state = ( (state*10) + 1)%k;
        len++;
    }
    return -1;
};
