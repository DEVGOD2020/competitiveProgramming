/**
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function(nums) {
    let solve = function(N){
        let score = 0;
        let sum = 0;
        for(let I = 1; I*I<=N; I++){
            if(N%I == 0){
                if(N/I == I){
                    score++;
                    sum+= I;
                    continue;
                }
                score += 2;
                sum += N/I;
                sum += I;
            }
            if(score > 4){return 0;}
        }
        return (score==4)?sum:0;
    }

    return nums.reduce( (sum,el)=> sum+solve(el), 0 );
};
