class Solution {
    public int findLHS(int[] nums) {
        Arrays.sort(nums);
        int ans = 0;
        for(int L = 0; L < nums.length; L++){
            int R = Arrays.binarySearch(nums,nums[L]+1);
            if(R>0){
                while(R<nums.length && nums[R] < nums[L]+2){
                    R++;
                }
                ans = Math.max(ans, R-L);
            }
        }
        return ans;
    }
}
