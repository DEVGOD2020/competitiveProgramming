/**
 * @param {number[]} nums
 * @return {number}
 */
var sumDigitDifferences = function(nums) {
    
    let result = 0;
    let divisor = 1;

    while(nums[0] >=divisor){
        let digitCounts = new Array(10).fill(0);

        for(let num of nums){
            const digit = Math.floor( (num/divisor) % 10);
            digitCounts[digit]++;
        }
        console.log(digitCounts);

        let n = nums.length;
        for (let i = 0; i < 10; i++) {
            let count = digitCounts[i];
            n -= count;
            result += count * n;
        }

        divisor *= 10;
    }

    return result;
};

//3,3,2,5,6