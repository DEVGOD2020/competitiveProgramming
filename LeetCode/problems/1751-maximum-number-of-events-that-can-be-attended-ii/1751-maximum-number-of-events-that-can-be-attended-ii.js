/**
 * @param {number[][]} events
 * @param {number} k
 * @return {number}
 */
var maxValue = function(events, k) {
    events.sort( 
        (a,b)=>{
            if(a[0] == b[0]){
                return a[1] - b[1];
            }
            return a[0] - b[0];
        }
    );

    let starts = events.map((el)=>el[0]);
    let DP = new Array(events.length+1).fill(0);

    for(let A = 0; A<k; A++){
        let newRow = new Array(events.length+1).fill(0);
        for(let I = events.length-1; I>= 0; I--){
            let Z = _.sortedLastIndex(starts, events[I][1]);
            newRow[I] = Math.max(
                newRow[I+1], //No, skip and just use this rows cur best.
                events[I][2] + DP[Z] //Yes, event money + previous best k-1
            )
        }

        DP = newRow;
    }

    return DP[0];
};
