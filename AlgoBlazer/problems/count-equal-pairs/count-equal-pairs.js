function countEqualPairs(nums) {
    let score = 0;
    let cnt = new Uint8Array(101);
    for(let num of nums){
        score += cnt[num];
        cnt[num]++;
    }
    return score;
}