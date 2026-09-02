int missingMultiple(int* nums, int numsSize, int k) {
    bool mySet[101] = {0};
    for(int I = 0; I<numsSize; I++){
        mySet[nums[I]] = 1;
    }
    int A = k;
    while(A<101){
        if(mySet[A] == 0){return A;}
        A += k;
    }
    return A;
}
