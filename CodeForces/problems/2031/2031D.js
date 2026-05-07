const input = require('fs').readFileSync(0,'utf8').split("\n");
const N = Number(input[0]);

let maxValue = function(nums) {
    let preMax = new Array(nums.length);
    let suffMin = new Array(nums.length);

    let max = -Infinity;
    for(let I = 0; I<nums.length; I++){
        max = Math.max(nums[I],max);
        preMax[I] = max;
    }

    min = Infinity;
    for(let I = nums.length-1; I>=0; I--){
        min = Math.min(nums[I],min);
        suffMin[I] = min;
    }

    for(let I = nums.length-1; I>=0; I--){
        preMax[I]>suffMin[I+1]?nums[I]=nums[I+1]:nums[I]=preMax[I];
    }

    return nums;
};

for(let T = 0; T<N; T++){
  let arr = input[T*2 + 2].split(" ").map( (el)=> Number(el) );
  console.log(maxValue(arr).join(" "));
}
