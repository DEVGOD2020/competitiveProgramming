function nextDigitPermutation(arr) {
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

    if(I < 0){return false;}

    let A = I+1;
    let B = arr.length-1;
    while(A<B){
        [arr[A],arr[B]] = [arr[B],arr[A]];
        A++;
        B--;
    }

    return [...arr];
}

function allOrderings(nums) {
    nums.sort((a,b)=>a-b);
    let ans = [[...nums]];

    while(true){
        let arr = nextDigitPermutation(nums);
        if(arr == false){break;}
        ans.push(arr);
    }

    return ans;
}