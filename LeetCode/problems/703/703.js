/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.PQ = new MinPriorityQueue();
    for(let num of nums){
        this.PQ.enqueue(num);
        if(this.PQ.size() > k){
            this.PQ.dequeue();
        }
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if(this.PQ.size() < this.k || this.PQ.front()['element'] < val){
        this.PQ.enqueue(val);
        if(this.PQ.size() > this.k){
            this.PQ.dequeue();
        }
    }
  return this.PQ.front()['element'];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */