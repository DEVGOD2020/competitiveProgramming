/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {
    let arr = new Array(n).fill('');
    let score = 1;
    let backtrack = function(I=0){
        if(I==n){
            if(score == k){
                return true;
            }
            score++;
            return false;
        }

        for(let chr of "abc"){
            if(I > 0 && arr[I-1] === chr){
                continue;
            }

            arr[I] = chr;
            if( backtrack(I+1) ){
                return true;
            }
            arr[I] = '';
        }
        return false;
    }

    backtrack();
    return arr.join("");
};

//A,_,_,_,_