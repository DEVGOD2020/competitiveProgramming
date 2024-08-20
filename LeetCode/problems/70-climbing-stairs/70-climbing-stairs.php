class Solution {
    private array $memo = [0,1,2,3];
    function climbStairs($n) {
        if($n <= 3){return $n;}

        if($this->$memo[$n] == NULL){
            $this->$memo[$n] = $this->climbStairs($n-1)+$this->climbStairs($n-2);
        }

        return $this->$memo[$n];
    }
}