/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    const max = Math.max(...nums);

    let L = 0;
    let R = 0;
    let freq = 0;
    let score = 0;

    while(R<nums.length){
        if(nums[R] == max){freq++;}
        while(freq >= k && L <= R){
            if(nums[L++] === max){
                freq--;
            }
        }
        score += L;
        R++;
    }

    return score;
};

/*
var countSubarrays = function(nums, k) {
    const max = Math.max(...nums);

    let L = 0;
    let R = 0;
    let freq = 0;
    let tempFreq = 0;
    let score = 0;
    while(R<nums.length){
        if(nums[R] == max){freq++;}
        tempFreq = freq;
        while(tempFreq >= k && L <= R){
            if(nums[L++] === max){ tempFreq--; }
            score++;
        }
        L=0;
        R++;
    }

    return score;
};*/