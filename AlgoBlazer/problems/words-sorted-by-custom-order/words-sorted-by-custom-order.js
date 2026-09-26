function isSortedByCustomOrder(words, order) {
    let arr = new Array(26);
    for(let I = 0; I<order.length; I++){
        arr[order[I].charCodeAt(0)-97] = I;
    }
    for(let I = 1; I<words.length; I++){
        let a = words[I-1];
        let b = words[I];
        let Z = 0;
        let cleared = false;
        while(Z<a.length && Z<b.length){
            if(arr[a[Z].charCodeAt(0)-97] > arr[b[Z].charCodeAt(0)-97]){
                return false;
            }
            if(arr[a[Z].charCodeAt(0)-97] < arr[b[Z].charCodeAt(0)-97]){
                cleared = true;
                break;
            }
            Z++;
        }
        if(!cleared && a.length > b.length){
            return false;
        }
    }
    return true;
}
