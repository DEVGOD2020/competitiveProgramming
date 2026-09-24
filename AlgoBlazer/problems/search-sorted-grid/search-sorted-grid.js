function searchSortedGrid(matrix, target) {
    let L = 0;
    let R = matrix.length;
    for(let col = 0; col<matrix[0].length; col++){
        L = 0;
        while(L<R){
            let M = Math.floor( (L+R)/2 );
            if(matrix[M][col] == target){
                return true;
            }
            if(matrix[M][col] < target){
                L = M+1;
            }else{
                R = M;
            }
        }
    }
    return false;
}
