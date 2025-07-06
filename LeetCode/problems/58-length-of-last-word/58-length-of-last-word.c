int lengthOfLastWord(char* s) {
    int leng = strlen(s)-1;
    int I = leng;
    int score = 0;

    while(I>=0){
        if(s[I] != ' '){
            score += 1;
        }else{
            if(score > 0){
                return score;
            }
        }
        I+=-1;
    }
    
    return score;
}
