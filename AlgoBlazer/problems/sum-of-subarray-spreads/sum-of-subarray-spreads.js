function sumSubarraySpreads(nums) {
    let next = new Array(nums.length).fill(nums.length);
    let prev = new Array(nums.length).fill(-1);

    let update = function(cmp){
        let stack = [];
        next = new Array(nums.length).fill(nums.length);
        prev = new Array(nums.length).fill(-1);
        for(let I = 0; I<nums.length; I++){
            while(stack.length > 0 && cmp(nums[stack[stack.length-1]],nums[I])  ){
                next[ stack.pop() ] = I;
            }
            if(stack.length > 0){
                prev[I] = stack[stack.length-1];
            }
            stack.push(I);
        }
    }

    let ans = 0;
    update( (a,b)=>a<b );
    for(let I = 0; I<nums.length; I++){
        ans += nums[I]*(next[I]-I)*(I-prev[I]);
    }
    update( (a,b)=>a>b );
    for(let I = 0; I<nums.length; I++){
        ans -= nums[I]*(next[I]-I)*(I-prev[I]);
    }

    return ans;
}