/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this.myStack = [];
    this.myMaxSize = maxSize;
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if(this.myStack.length < this.myMaxSize ){
        this.myStack.unshift(x);
    }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    if(this.myStack.length === 0){return -1;}
    return this.myStack.shift();
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    for(let I = 0; I<k; I++){
        this.myStack[this.myStack.length-I-1] += val;
    }
};

/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */