bool isPowerOfFour(int n) {
    if(n < 1){ return false; }
    long I = 1;
    long max = pow(2,31)-1;;
    for(I = 1; I < max; I=I*4){
        if(n == I){return true;}
    }
    return false;
}