function parityPartitionSort(nums) {
    let even = [];
    let odd = [];
    for(let num of nums){
        if(num%2 == 0){
            even.push(num);
        }else{
            odd.push(num);
        }
    }
    even.sort( (a,b)=>a-b);
    odd.sort( (a,b)=>b-a);
    for(let I = 0; I<nums.length; I++){
        if(nums[I]%2 == 0){
            nums[I] = even.pop();
        }
        else{
            nums[I] = odd.pop();
        }
    }
    return nums;
}
