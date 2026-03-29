bool canBeEqual(char* s1, char* s2) {
    if(s1[1] != s2[1] || s1[3] != s2[3]){
        if(s1[1] != s2[3] || s2[1] != s1[3]){return false;}
    }
    if(s1[0] != s2[0] || s1[2] != s2[2]){
        if(s1[0] != s2[2] || s2[0] != s1[2]){return false;}
    }
    return true;
}
