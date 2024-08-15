/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let hash = {};
    const ans = new Set();
    
    let SIZE = 0;
    if(nums.length<=2){SIZE = 0;}
    else{ SIZE = Math.floor( (nums.length)/3 )};

    for(let A of nums){
        if(hash[A] === undefined){
            hash[A] = 1;
            if(hash[A] == SIZE+1){ ans.add(A); }
        }else{
            hash[A]++;
            if(hash[A] == SIZE+1){ ans.add(A); }
        }
    }

    return Array.from(ans);
};