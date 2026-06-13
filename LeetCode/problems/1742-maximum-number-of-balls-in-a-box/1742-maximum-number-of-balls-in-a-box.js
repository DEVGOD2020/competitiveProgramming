/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
    let ds = function(n){
        let res = 0;
        while(n>0){
            res += n%10;
            n = Math.floor(n/10);
        }
        return res;
    }

    let myMap = new Map();
    let max = 0;
    for(let I = lowLimit; I<=highLimit; I++){
        let A = ds(I)
        myMap.set(A, (myMap.get(A)|0)+1);
        if(myMap.get(A)>max){max = myMap.get(A);}
    }
    return max;
};