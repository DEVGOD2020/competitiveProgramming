/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function(nums) {
    let myMap = new Map();
    let prevMap = new Map();
    let ans = [];
    for(let I = 0; I<nums.length; I++){
        if(!myMap.has(nums[I])){
            prevMap.set(nums[I],0);
            myMap.set(nums[I],[I]);
        }else{
            myMap.get(nums[I]).push(myMap.get(nums[I]).at(-1)+I);
        }
    }
    for(let I = 0; I<nums.length; I++){
        const NUM = nums[I];
        let prev = prevMap.get(NUM);
        prevMap.set(NUM,prev+1);

        let right = myMap.get(NUM).at(-1);
        let curr = myMap.get(NUM)[prev]??0;
        let left = myMap.get(NUM)[prev-1]??0;

        ans.push( 
            (right-curr)
            -left 
            +(2*prev-myMap.get(NUM).length+1)*I
        );
    }
    return ans;
};
