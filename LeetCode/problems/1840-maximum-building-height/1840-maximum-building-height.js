/**
 * @param {number} n
 * @param {number[][]} restrictions
 * @return {number}
 */
var maxBuilding = function(n, arr) {
    arr.push([n,n-1]);
    arr.push([1,0]);
    arr = arr.sort( (a,b)=>a[0]-b[0]);

    for(let I = 0; I<arr.length-1; I++){
        let dis = arr[I+1][0]-arr[I][0];
        let prevH = Math.min(arr[I+1][1], arr[I][1]+dis);
        arr[I+1][1] = prevH;
    }

    for(let I = arr.length-1; I>0; I--){
        let dis = arr[I][0]-arr[I-1][0];
        let prevH = Math.min(arr[I-1][1], arr[I][1]+dis);
        arr[I-1][1] = prevH;
    }

    let ans = 0;
    for(let I = 0; I<arr.length-1; I++){
        let dis = arr[I+1][0]-arr[I][0];
        let blah = Math.floor((dis+arr[I][1]+arr[I+1][1])/2);
        ans = Math.max(ans,blah);
    }

    return ans;
};