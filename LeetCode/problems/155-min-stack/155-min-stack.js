
var MinStack = function() {
    this.data = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.data.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.data.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.data[this.data.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return Math.min(...this.data);
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */