/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    //A052980
    //a(0)=1, a(1)=1, a(2)=2; thereafter a(n) = 2*a(n-1)+a(n-3)
    
    let myMap = new Map();
    let bro = function(n){
        if(n==1){return 1;}
        if(n==2){return 2;}
        if(n==3){return 5;}
        if(!myMap.has(n)){
            myMap.set(n, 2*bro(n-1)+bro(n-3) );
        }
        return myMap.get(n) % (1e9+7);
    }

    return bro(n);
};