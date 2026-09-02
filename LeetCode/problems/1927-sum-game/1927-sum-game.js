/**
 * @param {string} num
 * @return {boolean}
 */
var sumGame = function(num) {
    let left = [0,0];
    let right = [0,0];

    for(let I = 0; I<(num.length/2); I++){
        if(num[I] == "?"){
            left[0]++;
        }else{
            left[1]+=Number(num[I]);
        }
    }
    for(let I = ((num.length)/2); I<num.length; I++){
        if(num[I] == "?"){
            right[0]++;
        }else{
            right[1]+=Number(num[I]);
        }
    }

    if( (left[0] + right[0])%2 == 1){
        return true;
    }

    let dif = left[1]-right[1];
    let Qdif = right[0]-left[0];

    return dif !== (Qdif*9)/2
};