/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.data = new Map();
    this.pointer = 1;
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    if(!this.data.has(idKey)){
        this.data.set(idKey,value);
    }

    if(idKey !== this.pointer){ return []; }
    else{
        let arr = [];
        while(this.data.has(this.pointer)){
            arr.push(this.data.get(this.pointer));
            this.pointer++;
        }
        return arr;
    }
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */