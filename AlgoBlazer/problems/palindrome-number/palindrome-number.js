function isPalindrome(x) {
    if(x<0){return false;}
    let rev = 0;
    let temp = x;
    while(temp>0){
        rev = rev*10 + (temp%10);
        temp = Math.floor(temp/10);
    }
    return x == rev;
}
