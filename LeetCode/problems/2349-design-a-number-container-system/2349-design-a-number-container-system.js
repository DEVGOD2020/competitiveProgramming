class SortedSet{
    constructor(){
        this.arr = [];
    }
    add(number){
        let pos = _.sortedIndex(this.arr, number);
        if(this.arr[pos] !== number){
            this.arr.splice(pos,0,number);
        }
    }

    delete(number){
        let pos = _.sortedIndex(this.arr, number);
        if(this.arr[pos] === number){
            this.arr.splice(pos,1);
        }
    }

    values() {
        return this.arr;
    }
}



var NumberContainers = function() {
    this.numberIndexMap = new Map();
    this.IndexNumberMap = new Map();
};

/** 
 * @param {number} index 
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function(index, number) {

    if(!this.numberIndexMap.has(number)){
        this.numberIndexMap.set(number, new SortedSet())
    }

    let OG = this.IndexNumberMap.get(index);
    this.numberIndexMap.get(OG)?.delete(index);
    this.numberIndexMap.get(number).add(index);

    this.IndexNumberMap.set(index, number);
};

/** 
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function(number) {
    return this.numberIndexMap?.get(number)?.values()[0]||-1;
};

/** 
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */