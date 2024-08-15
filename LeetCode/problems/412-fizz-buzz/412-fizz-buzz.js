/**
 * @param {number} n
 * @return {string[]}
 */

var fizzBuzz = function(n) {
    let arr = [];
    let I = 0;
    while(I < n){
        if( (I+1)%3 == 0 && (I+1)%5 == 0 ){arr[I] = "FizzBuzz";}
        else if( (I+1)%3 == 0 ){arr[I] = "Fizz";}
        else if( (I+1)%5 == 0 ){arr[I] = "Buzz";}
        else {arr[I] = ""+(I+1);}
        I++;
    }
    return arr;
};