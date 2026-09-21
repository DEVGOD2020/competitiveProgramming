function exactDistinctSubarrays(nums, k) {
    let WTF = function(Z){
        let L = 0; let R = 0;
        let myMap = new Map();
        let score = 0;
        while(R<nums.length){
            myMap.set(nums[R], (myMap.get(nums[R])??0)+1);
            while(myMap.size > Z){
                myMap.set(nums[L], myMap.get(nums[L])-1);
                if(myMap.get(nums[L]) == 0){
                    myMap.delete(nums[L]);
                }
                L++;
            }
            score+= (R-L+1);
            R++;
        }
        return score;
    }
    return WTF(k)-WTF(k-1);
}
