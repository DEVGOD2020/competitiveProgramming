/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function(n, k) {

    let helper = function(row, col){
        if(row == 1 && col == 1){
            return 0;
        }

        const len = (1<<row) - 1;
        const mid = Math.ceil( len/2 );

        if(col == mid ){ return 1; }

        if(col > mid ){
            col = (len+1) - col;
            return +!helper( row-1, col);
        }

        return helper( row-1, col);
    }

    return ""+helper(n,k);
};