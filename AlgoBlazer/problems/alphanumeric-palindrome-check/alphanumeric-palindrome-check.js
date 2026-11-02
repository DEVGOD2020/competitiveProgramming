function alphanumericPalindromeCheck(s) {
    let L = 0;
    let R = s.length-1;
    s = s.toLowerCase();
    let check = (I)=>(I>=97 && I<=122)||(I>=48 && I<=57);
    while(L<=R){
      if(!check(s.charCodeAt(L)) ){ L++; continue; }
      if(!check(s.charCodeAt(R)) ){ R--; continue; }
      if(s[L] !== s[R]){
        return false;
      }
      L++; R--;
    }
    return true;
}