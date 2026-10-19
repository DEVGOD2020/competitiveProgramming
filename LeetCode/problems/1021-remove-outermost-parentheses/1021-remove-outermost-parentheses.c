char* removeOuterParentheses(char* s) {
    char *L = s;
    int score = 0;
    for(char *R = s; *R; R++){
        if(R[0] == '('){score++;}else{score--;}
        if(R[0] == '(' && score > 1){L[0] = '('; L++;}
        if(R[0] == ')' && score > 0){L[0] = ')'; L++;}
    }
    L[0] = '\0';
    return s;
}
