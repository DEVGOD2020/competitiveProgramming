/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

let myMap = new Map();
var isScramble = function(s1, s2) {
    if(myMap.has(s1+","+s2)){
        return myMap.get(s1+","+s2);
    }
    if(s1.length != s2.length){
        return false;
    }
    if( s1.split("").sort().join("") != s2.split("").sort().join("")){
        myMap.set(s1+","+s2,false);
        return false;
    }
    if(s1.length == 1){
        myMap.set(s1+","+s2,true);
        return true;
    }
    for(let I = 1; I<s1.length; I++){
        if( 
            isScramble(s1.slice(0,I),s2.slice(s2.length - I)) &&
            isScramble(s1.slice(I),s2.slice(0,s2.length - I))
        ){
            myMap.set(s1+","+s2,true);
            return true;
        }
        if( 
            isScramble(s1.slice(0,I),s2.slice(0,I)) &&
            isScramble(s1.slice(I),s2.slice(I))
        ){
            myMap.set(s1+","+s2,true);
            return true;
        }
    }
    myMap.set(s1+","+s2,false);
    return false;
};

