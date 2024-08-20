class Solution {
    public int maximumWealth(int[][] accounts) {
        int highWealth = 0;
        int tempWealth = 0;
        for(int[]a : accounts){
            tempWealth = 0;
            for(int b : a){
                tempWealth+=b;
            }
            if(tempWealth > highWealth){
                highWealth = tempWealth;
            }
        }
        return highWealth;
    }
}