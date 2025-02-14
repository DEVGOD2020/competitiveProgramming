var ProductOfNumbers = function() {
    this.prefixArr = [1];
    this.prefix = 1;
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    if(num === 0){
        this.prefixArr = [1];
        this.prefix = 1;
        return;
    }
    this.prefix *= num;
    this.prefixArr.push(this.prefix);
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    if (k >= this.prefixArr.length){
        return 0;
    }
    return (this.prefix / this.prefixArr[this.prefixArr.length-k-1]) || 0;
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */