
var RecentCounter = function() {
    this.pings = new MinPriorityQueue();
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.pings.enqueue(t);
    
    while(this.pings.front().element < t-3000){
        this.pings.dequeue();
    }
    return this.pings.size();
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */