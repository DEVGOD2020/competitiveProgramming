
int fib(int n){
    if (n <= 1) return n;
    else if(n <= 4){return n-1;}

    return fib(n-1)+fib(n-2);
}