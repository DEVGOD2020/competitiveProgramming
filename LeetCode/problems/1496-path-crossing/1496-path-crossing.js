/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let mySet = new Set();
    mySet.add(0);
    let blah = 0;
    for(let P of path){
        if(P == "N"){ blah += 1000; }
        if(P == "E"){ blah += 1; }
        if(P == "S"){ blah += -1000; }
        if(P == "W"){ blah += -1; }
        if(mySet.has(blah)){
            return true;
        }
        mySet.add(blah);
    }
    return false;
};
