/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    myStack = [];
    myMaxSize = maxSize;
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if(myStack.length < myMaxSize ){
        myStack.unshift(x);
    }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    if(myStack.length === 0){return -1;}
    return myStack.shift();
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    for(let I = 0; I<k && I < myMaxSize ; I++){
        myStack[myMaxSize-I-1] += val;
    }
};

/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */