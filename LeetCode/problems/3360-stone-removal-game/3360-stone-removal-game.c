bool canAliceWin(int n) {
    if(n<10){return false;}
    return (int)( 10.5-(sqrt(110.25-2*n)) )%2 == 1;
}
