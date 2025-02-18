/**
 * @param {number} n
 * @return {number[]}
 */
var constructDistancedSequence = function(n) {
    let ans;
    let backtrack = function(arr,visited,I=0){
        while(I < arr.length && arr[I] !== -1){
            I++;
        }

        if(I == arr.length){
            ans = arr;
            return true;
        }

        for(let c = n; c>=1; c--){
            if(visited[c]){continue;}
            let start = I;
            let end = I+(c>1?c:0);
            if(end < arr.length && arr[end] === -1){
                arr[start] = c;
                arr[end] = c;
                visited[c] = true;

                if(backtrack(arr, visited, I+1)){
                    return true;
                }

                arr[start] = -1;
                arr[end] = -1;
                visited[c] = false;
            }
        }
    }

    backtrack(
        new Array( (n*2) - 1).fill(-1),
        new Array( (n*2) - 1).fill(false)
    );

    return ans;
};