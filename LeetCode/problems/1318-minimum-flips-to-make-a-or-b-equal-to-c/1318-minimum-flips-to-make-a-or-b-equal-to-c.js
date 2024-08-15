/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
    if((a|b)==c){return 0;}

    let flip = 0;
    let tempA = a&1;
    let tempB = b&1;
    let tempC = c&1;
    
    while(a>0 || b>0 || c>0){
        
        if( (tempA | tempB) !== tempC){
            if(tempA == 1 && tempB == 1 && tempC == 0){flip+=2;}
            else if(tempA == 0 && tempB == 0 && tempC == 1){flip++;}
            else if( (tempA == 1 || tempB == 1) && tempC == 0){flip++;}
        }

        a = a>>1;
        b = b>>1;
        c = c>>1;

        tempA = a&1;
        tempB = b&1;
        tempC = c&1;
    }

    return flip;
};