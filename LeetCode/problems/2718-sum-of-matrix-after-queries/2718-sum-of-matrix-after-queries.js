/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number}
 */
var matrixSumQueries = function(n, queries) {
    let myMap = new Map();

    for(let A = queries.length-1; A>0; A+=-1){
        for(let I = 0; I<n; I++){
            //Row
            if(queries[A][0] == 0){
                let B = queries[A][1]*n;
                while(B<queries[A][1]*n+n){
                    if(!myMap.has(B)){
                        myMap.set(B,queries[B][2]);
                    }
                    B++;
                }
            }

            //Col
            if(queries[A][0] == 1){
                let B = queries[A][1];
                while(B<n**2){
                    if(!myMap.has(B)){
                        myMap.set(B,queries[B][2])
                    }
                    B += n;
                }
            }
        }
    }

    //console.log( Array.from(myMap.values()) );

    return 0;
};