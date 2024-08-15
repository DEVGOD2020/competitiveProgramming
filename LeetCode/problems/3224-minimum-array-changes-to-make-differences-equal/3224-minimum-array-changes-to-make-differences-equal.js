/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minChanges = function(nums, k) {

    //Wrong, binary strings?
    function moves(X){
        let L = 0;
        let R = nums.length-1;
        let score = 0;
        while(L<R){
            if( X !== Math.abs(nums[L] - nums[R])){
                let max = Math.max(nums[L], nums[R]);
                let min = Math.min(nums[L], nums[R]);

                if(max == min){
                    console.log(L,R);
                    score += 2;
                }else{
                    score++; 
                }
            }
            L++;
            R--;
        }
        return score;
    }

    let myMap = new Map();
    let L = 0;
    let R = nums.length-1;
    let max = [0,0];
    while(L<R){
        let result = Math.abs(nums[L] - nums[R]);
        if(!myMap.has(result)){
            myMap.set(result, 0);
        }
        myMap.set(result, myMap.get(result)+1);
        if(myMap.get(result) > max[1] ){
            max = [result, myMap.get(result)];
        }
        L++;
        R--;
    }

    console.log(myMap);
    console.log(max);

    return moves(max[0]);

};