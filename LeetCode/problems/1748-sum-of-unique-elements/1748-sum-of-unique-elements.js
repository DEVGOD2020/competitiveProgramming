/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    return _.toPairs(_.countBy(nums)).reduce( (sum,el)=>sum += el[1] == 1 ? Number(el[0]) : 0,0 )
};