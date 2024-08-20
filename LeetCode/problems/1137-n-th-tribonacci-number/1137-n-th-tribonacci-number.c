
int tribonacci(int n){
    int arr[38];
    arr[0] = 0;
    arr[1] = 1;
    arr[2] = 1;
    arr[3] = 2;
    arr[4] = 4;

    for(int I = 5; I<=n; I++){
        arr[I] = arr[I-1]+arr[I-2]+arr[I-3];
    }

    return arr[n];
}