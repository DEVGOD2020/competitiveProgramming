/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    let score = 0;

    const minPQ = new MinPriorityQueue((el) => el[1]);
    let seen = new Set();
    minPQ.enqueue( [[0, 0], matrix[0][0]] );

    let I = 0;
    while (I < k && minPQ.size() ) {
        let [cord, pri] = minPQ.dequeue();
        let [row,col] = cord; 
        if( seen.has(row*matrix.length + col)){
            continue;
        }
        if(matrix[row+1]?.[col] !== undefined){
            minPQ.enqueue( [ [row+1,col],matrix[row+1][col] ] );
        }
        if(matrix[row]?.[col+1] !== undefined){
            minPQ.enqueue( [ [row,col+1],matrix[row][col+1] ] );
        }
        seen.add(row*matrix.length + col);
        score = pri;
        I++;
    }

    return score;
};
