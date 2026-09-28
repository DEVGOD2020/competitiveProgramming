function isWithinOneEdit(s0, s1) {
    if(Math.abs(s0.length - s1.length) > 1){
        return false;
    }
    if(s0.length == s1.length){
        let L = 0;
        let R = 0;
        let NEED = 0;
        while(L<s0.length){
            if(s0[L] != s1[R]){
                NEED++;
            }
            if(NEED > 1){return false;}
            L++; R++;
        }
    }

    if(s0.length < s1.length){
        let L = 0;
        let R = 0;
        let NEED = 0;
        while(L<s0.length){
            if(s0[L] != s1[R]){
                NEED++;
                R++;
            }
            if(NEED > 1){return false;}
            L++; R++;
        }
    }

    if(s0.length > s1.length){
        let L = 0;
        let R = 0;
        let NEED = 0;
        while(R<s1.length){
            if(s0[L] != s1[R]){
                NEED++;
                L++;
            }
            if(NEED > 1){return false;}
            L++; R++;
        }
    }

    return true;
}
