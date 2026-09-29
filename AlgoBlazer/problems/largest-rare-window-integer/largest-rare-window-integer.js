function largestRareWindowInteger(nums, k) {
    let freq = _.countBy(nums);

    if(k == 1){
        let ans = -1;
        for(let num of nums){
            if(freq[num] == 1){
                ans = Math.max(num,ans);
            }
        }
        return ans;
    }

    if( nums[0] > nums[nums.length-1]){
        if( freq[nums[0]] == 1){
            return nums[0];
        }else if(freq[nums[nums.length-1]] == 1){
            return nums[nums.length-1];
        }
    }

    else if( nums[0] < nums[nums.length-1]){
        if( freq[nums[nums.length-1]] == 1){
            return nums[nums.length-1];
        }else if(freq[nums[0]] == 1){
            return nums[0];
        }
    }

    return -1
}
