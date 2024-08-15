/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const arr = s.split(" ");
    let newArr = [];

    for(const S of arr){
        let A = S.split("");
        let L = 0;
        let R = A.length-1;
        while(L<R){
            let temp = A[L];
            A[L] = A[R];
            A[R] = temp;
            L++;
            R--;
        }
        newArr.push(A.join(""));
    }

    return newArr.join(" ");

};