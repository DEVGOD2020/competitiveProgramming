function incrementDigits(digits) {
    let ans = [];
    if(digits[digits.length-1] < 9){
        digits[digits.length-1]++;
        return digits;
    }
    digits[digits.length-1] = 0;
    let carry = 1;
    for(let I = digits.length-2; I>=0; I--){
        if(digits[I]+1 <= 9){
            digits[I]++;
            return digits;
        }else{
            digits[I] = 0;
        }
    }
    return [1,...digits];
}
