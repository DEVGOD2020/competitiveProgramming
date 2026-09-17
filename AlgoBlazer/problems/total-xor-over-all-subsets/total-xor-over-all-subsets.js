function totalXorOverAllSubsets(nums) {
    return nums.reduce( (sum,el)=>sum|el) << (nums.length-1)
}
