/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function(nums, limit) {
    
    let sortedNums = _.sortBy(nums);
    let groups = [new Deque()];
    let num_to_group = new Map();
    let groupID = 0;
    for(let I = 0; I < nums.length; I++){
        if( Math.abs(sortedNums[I]-sortedNums[I-1]) > limit){
            groupID++;
            groups[groupID] = new Deque();;
        }
        
        num_to_group.set(sortedNums[I], groupID);

        groups[groupID].pushBack( sortedNums[I] );
    }

    let ans = [];
    for(let I = 0; I < nums.length; I++){
        ans.push( groups[ num_to_group.get(nums[I]) ].popFront() )
    }

    return ans;
};