/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    let arr = [];
    for(let I = 1; I<=n; I++){
        arr.push(I);
    }

    while(arr.length>1){
        for(let A = 0; A<k; A++){
            let el = arr.shift();
            arr.push(el);
        }
        arr.pop();
    }

    return arr[0];
};

// f(5,2)+1
    //f(4,2)
        //f(3,2)
            //f(2,2)
                //f(1,2)
                    //return 0;
            // return (0+2)%5
        // return (2+2)%5
    // return (4+2)%5
// return (1+2)%5

//returned 3