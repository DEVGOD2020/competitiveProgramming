/**
 * @param {number[][]} grid
 * @return {number}
 */
var minSwaps = function(grid) {
    let data = grid.map( (row)=> row.lastIndexOf(1) );
    let score = 0;
    for(let A = 0; A<grid.length; A++){
        for(let B = A+1; B<grid.length; B++){
          if(data[A] <= A){continue}
            if(data[A] > data[B]){
                while(A<B){
                  score += 1;
                  [data[B-1],data[B]]=[data[B],data[B-1]];
                  B--;
                }
            }
        }
        if(data[A] > A){return -1;}
    }
    return score;
};
