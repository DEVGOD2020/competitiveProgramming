int* targetIndices(int* nums, int numsSize, int target, int* returnSize) {
    int A = 0;
    int B = 0;
    for(int I = 0; I<numsSize; I++){
        if(nums[I] < target){A++;}
        if(nums[I] == target){B++;}
    }
    B = B+A;
    *returnSize = B-A;
    int* range_arr = (int*)malloc((B-A) * sizeof(int));
    for(int I = A; I<B; I++){
        range_arr[I-A] = I;
    }
    return range_arr;
}
