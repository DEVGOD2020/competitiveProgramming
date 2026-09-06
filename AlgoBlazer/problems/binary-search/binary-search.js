function search(nums, target) {
    let L = 0;
    let R = nums.length;
    while(L<R){
        M = Math.floor( (L+R)/2 );
        if(nums[M] < target){
            L = M+1;
        }else{
            R = M;
        }
    }
    if(nums[L] != target){return -1}
    return L;
}
