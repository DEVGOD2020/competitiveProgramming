/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hash = {};
    let ans = [];
    let finalAns = [];

    for(let a of nums){
        if(hash[a] === undefined){
            hash[a] = 1;
        }else{
           hash[a] += 1; 
        }
    }

    for(let a in hash){
        ans.push([a,hash[a]])
    }
    
    ans.sort((a, b) => b[1] - a[1]);

    for(let I = 0; I<k; I++){
        finalAns.push(ans[I][0]);
    }

    return finalAns;
};