/**
 * @param {number[]} cards
 * @return {boolean}
 */
var judgePoint24 = function(cards) {
    let blah = function(arr){
        if(arr.length===1){
            return Number(arr[0].toFixed(4)) == 24;
        }
        for(let A = 0; A<arr.length; A++){
            for(let B = A+1; B<arr.length; B++){
                let temp = [];
                for(let Z=0;Z<arr.length;Z++){
                    if(Z!==A && Z!==B){temp.push(arr[Z]);}
                }
                let ops = [
                    arr[A]+arr[B], 
                    arr[A]-arr[B], 
                    arr[B]-arr[A], 
                    arr[A]*arr[B],
                    Number((arr[A]/arr[B]).toFixed(8)),
                    Number((arr[B]/arr[A]).toFixed(8)),
                ];

                for(let op of ops){
                    temp.push( op );
                    if(blah([...temp])){return true;}
                    temp.pop();
                }
            }
        }
        return false;
    }
    return blah(cards);
};
