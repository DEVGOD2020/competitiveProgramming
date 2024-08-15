/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let L = 0;
    let R = 0;
    let zeroCount = 0;
    let oneCount = 0;

    while(L<s.length || R<s.length){
        while(zeroCount**2 > oneCount && oneCount !== 0){
            if(s.charAt(L) == '1'){
                oneCount += -1;
            }else{
                zeroCount += -1;
            }
            L++;
        }

        if(s.charAt(R) == '1'){oneCount++;}
        else{zeroCount++;}

        console.log(L,R);

        if(zeroCount**2 <= oneCount){
            console.log("nya");
        }

        if(R<s.length){R++;}else{L++;}
    }
};