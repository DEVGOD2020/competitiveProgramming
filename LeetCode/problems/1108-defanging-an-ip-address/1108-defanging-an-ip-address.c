

char * defangIPaddr(char * address){
    char *newStr = (char *)malloc((24 + 1) * sizeof(char));
    int b = 0;
    for(int I = 0; address[I]; I++){
        if(address[I] == '.'){
            newStr[b] = '[';
            newStr[b+1] = '.';
            newStr[b+2] = ']';
            b+=3;
        }else{
            newStr[b] = address[I];
            b++;
        }
    }

    newStr[b] = '\\0';
    return newStr;
}