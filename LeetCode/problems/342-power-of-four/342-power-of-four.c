bool isPowerOfFour(int n) {
    if(n <= 0){return false;}
    if( (n&(n-1)) != 0){return false;}
    return ((n)&5726623061)>0;
}
