Array.prototype.last = function() {
    let len = this.length-1;
    if(len==-1){return -1;}
    else{
        return this[len];
    }
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */