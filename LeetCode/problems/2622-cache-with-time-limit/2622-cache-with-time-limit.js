var TimeLimitedCache = function() {
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const hasKey = this.cache.has(key)
    this.cache.set(key,[value,Date.now()+duration]);
    return hasKey;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    try {
        if(this.cache.get(key)[1] < Date.now()){
            this.cache.delete(key)
            return -1;
        }   

        return this.cache.get(key)[0];
    } catch (error) {
        return -1;
    }
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    let I = 0;
    for(let val of this.cache.entries()){
        if( val[1][1] < Date.now() ){
            this.cache.delete(val[0])
        }
        I++;
    }
    return this.cache.size;
};

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */