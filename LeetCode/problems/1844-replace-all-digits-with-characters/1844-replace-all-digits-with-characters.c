char* replaceDigits(char* s) {
    for (char* p = s; *p && *(p+1); p+=2) {
        p[1] = p[0] + (p[1]-'0');
    }
    return s;
}