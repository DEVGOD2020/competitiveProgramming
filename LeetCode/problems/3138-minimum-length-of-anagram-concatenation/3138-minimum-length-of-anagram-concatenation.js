/**
 * @param {string} s
 * @return {number}
 */
var minAnagramLength = function(s) {
    let myMap = new Map();
    for(let c of s){
        if(!myMap.has(c)){
            myMap.set(c,0);
        }
        myMap.set(c, myMap.get(c)+1);
    }
    
    let gcd = function(arr){
       let min = Math.min(...arr);
        while(min > 1){
            let check = true;
            for(let el of arr){
                if(parseInt(el)%min > 0){
                    check = false;
                }
            }
            if(check){return min;}
            min--;
        }
        return min
    }
    
    return s.length/gcd([...myMap.values()]);
    
};