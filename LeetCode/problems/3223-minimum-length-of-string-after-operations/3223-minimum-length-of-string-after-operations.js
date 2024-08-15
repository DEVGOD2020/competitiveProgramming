/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    let myMap = new Map();
    for(let a of s){
        if(!myMap.has(a)){
            myMap.set(a, 0);
        }
        myMap.set(a, myMap.get(a)+1);
    }

    let removed = 0;
    for(let [key,val] of myMap){
        while(val >= 3){
            removed += 2;
            val += -2;
        }
    }

    return s.length-removed;
};