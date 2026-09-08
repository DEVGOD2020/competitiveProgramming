function mergeSorted(a, b) {
    const SIZE = a.length+b.length;
    for(let L = a.length-1, R = b.length-1, I=SIZE-1; I>=0; I--){
        if( (a[L]??-Infinity) < b[R] ){a[I] = b[R]; R--; }
        else{ a[I] = a[L]; L--;}
    }
    return a;
}
