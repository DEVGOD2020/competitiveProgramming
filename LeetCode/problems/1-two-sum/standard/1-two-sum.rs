use std::collections::HashMap;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut myMap = HashMap::new();
        for I in 0..nums.len() { 
            let diff = target - nums[I];
            if myMap.contains_key(&diff) {
                return vec![*myMap.get(&diff).unwrap() as i32, I as i32];
            }
            myMap.insert(nums[I],I);
        }
        vec![]
    }
}
