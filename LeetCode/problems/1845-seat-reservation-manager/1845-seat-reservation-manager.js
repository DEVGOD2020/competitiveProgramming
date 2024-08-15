/**
 * @param {number} n
 */
var SeatManager = function(n) {
    q = new MaxPriorityQueue();
    q.enqueue(true);
    q.enqueue(true);
    q.enqueue(true);
    console.log(q.back());
    console.log(q.front());
    console.log(q);
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function() {
    q.enqueue(q.back()['element']+1);
    return q.back()['element'];
};

/** 
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function(seatNumber) {
    
};

/** 
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */