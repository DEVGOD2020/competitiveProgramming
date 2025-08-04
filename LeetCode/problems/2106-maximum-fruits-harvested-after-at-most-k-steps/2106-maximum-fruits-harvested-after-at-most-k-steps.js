/**
 * @param {number[][]} fruits
 * @param {number} startPos
 * @param {number} k
 * @return {number}
 */
var maxTotalFruits = function(fruits, startPos, k) {
    let prefixMap = new Map();
    let keyArr = [];
    let sum = 0;
    let I = 0;

    for(let fruit of fruits){
        sum += fruit[1];
        prefixMap.set(fruit[0],sum);
        keyArr[I] = fruit[0];
        I++;
    }

    let ans = 0;
    for(let L = Math.max(0,startPos-k); L<=startPos; L++){
        let dis = Math.abs(startPos-L);

        let upper1 = startPos + (k - dis*2);
        let upper2 = startPos + Math.floor((k - dis)/2);

        let R = Math.max(upper1,upper2);

        let ll = _.sortedIndex(keyArr, L);

        let rr =  Math.min(
            _.sortedIndex(keyArr, R+1)-1,
            keyArr.length-1
        );

        let leftSum = prefixMap.get(keyArr[ll-1])|0;
        let rightSum = prefixMap.get(keyArr[rr])|0;

        ans = Math.max(ans,rightSum-leftSum); 
    }
    return ans;
};
