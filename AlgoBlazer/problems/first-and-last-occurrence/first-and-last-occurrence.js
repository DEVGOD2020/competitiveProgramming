function occurrenceRange(nums, target) {
    if(nums.length == 0){return [-1,-1]}
    let higherBound = function(target){
        let L = 0;
        let R = nums.length;
        let M = 0;
        let ans = 0;
        while(L<R){
            M = Math.floor( (L+R)/2 );
            if(nums[M] < target){
                L = M+1;
            }else if(nums[M] == target){
                ans = M; 
                L = M+1;
            }else{
                R=M;
            }
        }
        return ans;
    }
    let lowerBound = function(target){
        let L = 0;
        let R = nums.length-1;
        let M = 0;
        while(L<R){
            M = Math.floor( (L+R)/2 );
            if(nums[M] < target){
                L = M+1;
            }else{
                R = M;
            }
        }
        return L;
    }
    let LOW = lowerBound(target);
    let HIGH = higherBound(target);
    if(nums[LOW] != target){return [-1,-1];}
    return [LOW,HIGH];
}
