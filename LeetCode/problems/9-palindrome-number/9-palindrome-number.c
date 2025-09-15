bool isPalindrome(int x) {
    if(x < 0){return false;}
    unsigned int rev = 0; 
    int temp = x;
    while(temp>0){
        rev = rev*10 + (temp%10);
        temp = temp/10;
    }
    return rev == x;
}
