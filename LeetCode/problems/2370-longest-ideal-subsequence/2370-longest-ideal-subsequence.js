/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

 //a = 97 asci
var longestIdealString = function (s, k) {
    let myMap = new Map();
    myMap.set(s[0].charCodeAt(0),1);
    for(let I = 1; I<s.length; I++){
        let val = s[I].charCodeAt(0);
        let max = -Infinity;
        let blah = 0
        for(let A = -k; A<=k; A++){
            if(myMap.has(val+A) && max < myMap.get(val+A)){
                max = myMap.get(val+A);
                blah = val+A;
            }
        }
        if(max !== -Infinity){
            myMap.set(val,myMap.get(blah)+1);
        }else{
            myMap.set(val,1);
        }
    }

    //console.log(myMap);
    return Math.max(...myMap.values());
};