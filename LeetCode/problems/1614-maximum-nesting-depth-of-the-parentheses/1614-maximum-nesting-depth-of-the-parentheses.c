int maxDepth(char* s) {
    int score = 0;
    int ans = 0;
    for(char *p = s; *p; p++){
        if(p[0] == '('){score++;}
        if(p[0] == ')'){score--;}
        ans = MAX(score, ans);
    }
    return ans;
}
