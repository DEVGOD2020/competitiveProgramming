/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    let minPQ = new MinPriorityQueue( (el)=>el[0] );
    minPQ.enqueue( [ nums1[0] + nums2[0], [0,0] ] );
    let visit = new Set();

    let ans = [];
    while(k>0 && !minPQ.isEmpty()){
        let [X,Y] = minPQ.dequeue()[1];
        ans.push( [nums1[X], nums2[Y] ] );

        if(X+1 < nums1.length && !visit.has(`${X+1},${Y}`)){
            minPQ.enqueue( [ nums1[X+1] + nums2[Y], [X+1,Y] ] );
            visit.add(`${X+1},${Y}`);
        }
        if(Y+1 < nums2.length && !visit.has(`${X},${Y+1}`)){
            minPQ.enqueue( [ nums1[X] + nums2[Y+1], [X,Y+1] ] );
            visit.add(`${X},${Y+1}`);
        }
        k--;
    }


    return ans;
};