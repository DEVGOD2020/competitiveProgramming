function fewestPalindromicPieces(s) {
    let mat = Array.from({length:s.length},()=>new Array(s.length).fill(false));
    for(let A = 0; A<s.length; A++){
        mat[A][A] = true;
    }

    for(let A = s.length-1; A>=0; A--){
        for(let B = A+1; B<s.length; B++){
            if(s[A] == s[B]){
                if(B-A == 1){
                    mat[A][B] = true;
                }else if( mat[A+1][B-1]){
                    mat[A][B] = true;
                }
            }
        }
    }

    let DP = new Array(s.length+1).fill(Infinity);
    DP[0]=0;
    for(let R = 0; R<s.length; R++){
        for(let L = 0; L<=R; L++){
            if(mat[L][R]){
                DP[R+1] = Math.min(DP[R+1],DP[L]+1);
            }
        }
    }
    return DP[s.length];
}
