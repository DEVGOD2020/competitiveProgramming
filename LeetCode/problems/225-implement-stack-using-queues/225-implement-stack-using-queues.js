
var MyStack = function() {
    q1 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    q1.unshift(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return q1.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return q1[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return q1.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */