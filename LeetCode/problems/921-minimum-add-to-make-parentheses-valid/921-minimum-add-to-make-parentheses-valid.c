int minAddToMakeValid(char* s) {
    int A = 0;
    int B = 0;
    for(char *chr=s; *chr; chr++){
        if(chr[0]=='('){A++;}
        else{
            if(A>0){A--;}else{B++;}
        }
    }
    return A+B;
}
