#define MIN(a, b) ((a) < (b) ? (a) : (b))
int minAbsoluteDifference(int* nums, int numsSize) {
    int prev = -1;
    int prevNum = -1;
    int ans = 1000;
    for(int I = 0; I<numsSize; I++){
        if(nums[I] == 1 && prevNum == 2){
            ans = MIN(ans, I-prev);
        }
        if(nums[I] == 2 && prevNum == 1){
            ans = MIN(ans, I-prev);
        }
        if(nums[I] == 1 || nums[I]==2){
            prev = I;
            prevNum = nums[I];
        }
    }
    return ans==1000?-1:ans;
}
