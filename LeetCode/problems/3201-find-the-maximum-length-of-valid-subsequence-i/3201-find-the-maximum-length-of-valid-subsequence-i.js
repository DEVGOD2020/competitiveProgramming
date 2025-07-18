/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function(nums) {
    const N = nums.length;

    let evenOdd = new Array(N+1).fill(0);
    let oddEven = new Array(N+1).fill(0);
    let evenCount = +( (nums[N-1]%2) === 0);
    let oddCount = +( (nums[N-1]%2) === 1);

    for(let I = N-2; I>=0; I--){
        //Counts of just evens / odds
        if(nums[I]%2){ oddCount++; }
        else{ evenCount++; }

        //DP path of even to odd
        if( (nums[I]%2 == 0) && (nums[I+1]%2 == 1) ){
            evenOdd[I] = Math.max( oddEven[I+1]+1,  2)
        }else{
            evenOdd[I] = evenOdd[I+1];
        }

        //DP path of odd to even
        if( (nums[I]%2 == 1) && (nums[I+1]%2 == 0) ){
            oddEven[I] = Math.max( evenOdd[I+1]+1,  2)
        }else{
            oddEven[I] = oddEven[I+1];
        }
    }

    return Math.max(evenCount, oddCount, evenOdd[0], oddEven[0]);
};
