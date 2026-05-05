/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function(n) {
    let digit = n.toString().split("").reverse().map((el)=>Number(el));
    let blah = function(pos=digit.length-1,tight=1,flip=0){
        if(pos == -1){
            return flip;
        }
        let res = 0;
        const K = tight ? digit[pos] : 9;
        for(let D = 0; D<=K; D++){
            let newTight = D == digit[pos] ? tight : 0;
            if(D !== 3 && D !== 4 && D !== 7){
            let newFlip = (D == 2 || D == 5 || D == 6 || D == 9) ? 1 : flip;
            res += blah(pos-1,newTight,newFlip)
            }
        }
        return res;
    }
    return blah();
};
