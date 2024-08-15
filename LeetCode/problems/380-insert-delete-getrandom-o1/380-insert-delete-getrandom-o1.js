var RandomizedSet = function() {
    dataSet = new Set();
};

RandomizedSet.prototype.insert = function(val) {
    if(dataSet.has(val)){
        return false;
    }
    dataSet.add(val);
    return true;
};

RandomizedSet.prototype.remove = function(val) {
    return dataSet.delete(val);
};

RandomizedSet.prototype.getRandom = function() {
    const R = Math.floor(Math.random()*dataSet.size);
    const arr = [...dataSet.values()][R];
    return arr;
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */