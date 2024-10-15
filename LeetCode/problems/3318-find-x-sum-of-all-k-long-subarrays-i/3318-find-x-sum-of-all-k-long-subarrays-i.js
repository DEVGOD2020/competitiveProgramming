/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function(nums, k, x) {

    let L = 0;
    let R = k;
    let ans = [];
    while(R<=nums.length){
        let freq = _.countBy(nums.slice(L,R));

        const PQ = new MaxPriorityQueue({
            compare: (a, b) => {
                if (a.priority !== b.priority) {
                return a.priority > b.priority ? -1 : 1;
                }
                return a.element > b.element ? -1 : 1;
            }
        });

        for(let f of _.toPairs(freq)){
            PQ.enqueue( { element: Number(f[0]), priority: f[1] } );
        }

        let sum = 0;
        for(let I = 0; I<x && 0<PQ.size(); I++){
            let el = PQ.dequeue();
            sum += parseInt(el.element)*parseInt(el.priority);
        }
        
        ans.push(sum);
        L++;
        R++;
    }

    return ans;
};