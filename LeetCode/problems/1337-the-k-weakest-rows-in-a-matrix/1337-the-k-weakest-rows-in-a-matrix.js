/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    const numQ = new PriorityQueue({
        compare: (a, b) => {
            if (a[1] < b[1]){ return -1;}
            if (a[1] > b[1]){ return 1;}
            return parseInt(a[0])<parseInt(b[0]) ? -1 : 1;
        }
    });

    for(let a in mat){
        let score = weakScore(mat,a);
        numQ.enqueue([a, score ]);
    }

    return numQ.toArray().map(pair => pair[0]).flat();
};

var weakScore = function(mat,I){
    return mat[I].filter((element) => element === 1).length;
}