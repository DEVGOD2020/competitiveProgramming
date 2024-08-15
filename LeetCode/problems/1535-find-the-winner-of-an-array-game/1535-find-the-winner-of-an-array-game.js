/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function(arr, k) {
    if(k>= arr.length){ return Math.max(...arr); }
    else{
        let wins = 0;
        let winningNumber = Math.max(arr[0],arr[1]);

        let L = 0;
        let R = 1;

        while(wins < k){
            if(arr[L] > arr[R]){
                if(winningNumber == arr[L]){wins++;}
                else{wins = 1;}
                winningNumber = arr[L];
                R++;
            }else if(arr[L] <= arr[R]){
                if(winningNumber == arr[R]){wins++;}
                else{wins = 1;}
                winningNumber = arr[R];
                L=R;
                R++;
            }
            if(wins == k){ return winningNumber; }
            L=L%arr.length;
            R=R%arr.length;
        }
    }
};