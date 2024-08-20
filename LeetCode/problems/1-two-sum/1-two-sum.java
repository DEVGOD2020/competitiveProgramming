class Solution {
    public int[] twoSum(int[] nums, int target) {
        int size = nums.length;
        for(int A = 0; A<size; A++){
            for(int B = A+1; B<size; B++){
                if(nums[A]+nums[B] == target){
                    return new int[]{A,B};
                }
            }
        }

        return null;
    }
}