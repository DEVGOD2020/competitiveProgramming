/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function(n) {
    //SHOUT OUT Shubham Raj for the discussion 4800 hint
    if(n >= 4800){return 1;}

    let memo = new Map();
    let blah = function(A,B){
        if(A <= 0 && B<=0){return 0.5;}
        if(A <= 0){return 1;}
        if(B <= 0){return 0;}

        if(memo.get(`${A}_${B}`)){
            return memo.get(`${A}_${B}`)
        }

        memo.set( `${A}_${B}`,
        blah(A-100,B)*0.25 + 
        blah(A-75,B-25)*0.25 +
        blah(A-50,B-50)*0.25 +
        blah(A-25,B-75)*0.25 );

        return memo.get(`${A}_${B}`);
    }

    return blah(n,n);
};
