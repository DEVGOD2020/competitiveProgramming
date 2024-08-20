int countDigits(int num) {
    int temp = num;
    int score = 0;

    while(temp > 0){
        if(num % (temp%10) == 0){score++;}
        temp = temp/10;
    }

    return score;
}