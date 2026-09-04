function rotatedArrayMinimum(nums) {
    let findReflect = function(){
        let L = 0;
        let R = nums.length;
        let M = 0;
        while(L<R){
            M = Math.floor( (L+R)/2 );
            if( nums[M] >= nums[0]){
                L = M+1;
            }else{
                R = M;
            }
        }
        return L;
    }

    let I = findReflect();
    if(I >= nums.length){return nums[0];}
    return nums[I];
}
