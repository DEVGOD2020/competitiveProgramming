bool isPowerOfTwo(int n) {
    signed long I = 1;
    signed long max = pow(2,31)-1;
    for(I = 1; I < max; I=I*2){
        if(n == I){return true;}
    }
    return false;
}