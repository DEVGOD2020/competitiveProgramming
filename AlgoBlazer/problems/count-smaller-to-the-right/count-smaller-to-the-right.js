function countSmallerToRight(nums) {
    const Z = 10001
    let arr = new Array(20002).fill(0);
    let update = function(key, val){
        while(key <= arr.length){
            arr[key] += val;
            key += key&(-key);
        }
    }
    let query = function(key){
        let score = 0;
        while(key > 0){
            score += arr[key];
            key -= key&(-key);
        }
        return score;
    }

    let ans = [];
    for(let I = nums.length-1; I>=0; I--){
        const A = nums[I]+Z;
        ans.push(query(A-1));
        update(A,1);
    }
    return ans.reverse();
}