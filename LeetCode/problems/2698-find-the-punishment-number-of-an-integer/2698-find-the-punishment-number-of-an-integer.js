/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function(n) {
    let blah = function(target, square=""+(target**2), index=0, sum = 0){
        if(index === square.length){
            return sum === target;
        }

        let num = 0;
        for(let I = index; I<square.length; I++){
            num = num*10 + parseInt(square[I]);
            if( blah(target, square, I+1, sum + num) ){
                return true;
            }
        }

        return false;
    }

    let score = 0;
    for(let I = 1; I<=n; I++){
        if( blah(I) ){
            score += I**2;
        }
    }

    return score;
    
};