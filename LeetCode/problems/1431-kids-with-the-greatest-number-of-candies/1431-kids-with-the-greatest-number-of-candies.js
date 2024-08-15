/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies);
    let ans = [];
    for(let a of candies){
        ans.push( (a+extraCandies >= max) )
    }
    return ans;
};