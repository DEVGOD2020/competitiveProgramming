/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    const SIZE = arr.length-1;
    for(let A=0; A<SIZE; A++){
        for(let B=0; B<SIZE-A; B++){
            let X = bitCount(arr[B]);
            let Y = bitCount(arr[B+1]);
            let temp = 0;
            if ( X > Y ){
                temp = arr[B];
                arr[B] = arr[B+1];
                arr[B+1] = temp;
            }
            else if ( X == Y ){
                if ( arr[B] > arr[B + 1] ){
                    temp = arr[B];
                    arr[B] = arr[B+1];
                    arr[B+1] = temp;
                }
            }
        }
    }

    return arr;
};

function bitCount(A){
    //let STR = A.toString(2);
    //let val = 0;
    //for(let B of STR){
    //    if(B == '1'){ val++; }
    //}
    //return val;
    let I = 0;
    let val = 1;
    let score = 0;
    while(val < A){
        if( (A&val) === val){score++; }
        I++;
        val = 2 ** I;
    }
    return score;
}