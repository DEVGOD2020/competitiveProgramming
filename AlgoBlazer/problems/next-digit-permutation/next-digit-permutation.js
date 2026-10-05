function nextDigitPermutation(n) {
    let arr = ((""+n).split(""));
    arr.map((el)=>Number(el));

    let I = arr.length-2;
    while(I>=0 && arr[I] >= arr[I+1]){
        I--;
    }

    if(I >= 0){
        let R = arr.length-1;
        while(arr[R] <= arr[I]){
            R--;
        }
        [arr[I],arr[R]] = [arr[R],arr[I]];
    }

    let A = I+1;
    let B = arr.length-1;
    while(A<B){
        [arr[A],arr[B]] = [arr[B],arr[A]];
        A++;
        B--;
    }

    return Number(arr.join(""));
}