function maxSubarraySum(arr) {
    let prefixSum = arr[0];
    let maxSum = arr[0];

    for (let I = 1; I < arr.length; I++) {
        prefixSum = Math.max(prefixSum + arr[I], arr[I]);
        maxSum = Math.max(maxSum, prefixSum);
    }

    return maxSum;
}