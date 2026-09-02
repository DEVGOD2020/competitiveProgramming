impl Solution {
    pub fn is_middle_element_unique(nums: Vec<i32>) -> bool {
        return nums.iter()
        .filter(|&&el| el==nums[nums.len()/2])
        .count() == 1;
    }
}
