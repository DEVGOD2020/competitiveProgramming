bool isPalindrome(char* s) {
    int I = 0;
    int Z = strlen(s)-1;
    while(I<strlen(s)-1 && Z > 0){
        while( (tolower(s[I]) < 97 || tolower(s[I]) > 122) && I<strlen(s)-1){I++;}
        while( (tolower(s[Z]) < 97 || tolower(s[Z]) > 122) && Z > 0){Z+=-1;}

        if( tolower(s[I]) != tolower(s[Z])){
            return false;
        }
        I++;
        Z += -1;
    }
    return true;
}