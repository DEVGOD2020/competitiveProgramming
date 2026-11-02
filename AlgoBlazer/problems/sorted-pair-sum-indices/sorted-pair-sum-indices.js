function sortedPairSumIndices(numbers, target) {
    let L = 0;
    let R = numbers.length-1;
    while(L<R){
        if(numbers[L]+numbers[R] < target){
            L++;
        }
        if(numbers[L]+numbers[R] > target){
            R--;
        }
        if(numbers[L]+numbers[R] == target){
            return [L,R];
        }
    }
}