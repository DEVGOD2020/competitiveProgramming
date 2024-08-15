/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function(n) {
    var probA = 0;
    var probB = 0;
    let soupA = function(a, b, c=0){
        if(a <= 0 && b <= 0){probB++; return c;}
        if(a <= 0){probA++; return c;}

        if(a > 0){
            return soupA(a-100,b,c+1)
            +soupA(a-75,b-25,c+1)
            +soupA(a-50,b-50,c+1)
            +soupA(a-25,b-75,c+1);
        }else{
           return soupA(a-75,b-25,c+1)
            +soupA(a-50,b-50,c+1)
            +soupA(a-25,b-75,c+1);
        }
    }

    let val = soupA(n,n);
    console.log(val,probA,probB);
    return probA/probB;
};