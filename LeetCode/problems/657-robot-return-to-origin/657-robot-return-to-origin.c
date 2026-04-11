bool judgeCircle(char* moves) {
    short X = 0;
    short Y = 0;
    for(char *p = moves; *p; p++){
        if(*p == 'L'){X--;}
        if(*p == 'R'){X++;}
        if(*p == 'U'){Y--;}
        if(*p == 'D'){Y++;}
    }
    return X == 0 && Y == 0;
}
