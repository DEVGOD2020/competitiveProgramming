bool checkValidString(char* s) {
    int A = 0;
    int B = 0;
    for(char *chr=s; *chr; chr++){
        if(chr[0] == '('){A++; B++;}
        if(chr[0] == '*'){A--; B++;}
        if(chr[0] == ')'){A--; B--;}
        if(B < 0){return false;}
        if(A<0){A=0;}
    }
    return A == 0;
}
