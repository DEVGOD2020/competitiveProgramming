class LRUCache{
    constructor(capacity){
        this.myMap = new Map();
        this.list = new DoublyLinkedList();
        this.size = 0;
        this.maxSize = capacity;
    }
    get(key){
        let curr = this.myMap.get(key);
        if(curr === undefined){ return -1; }
        this.myMap.set(
            key, 
            this.list.insertFirst( this.list.remove(curr) ) 
        );
        return curr._value[1];
    }
    put(key,value){
        if(this.myMap.has(key)){
            this.list.remove(this.myMap.get(key));
            this.myMap.set(key, this.list.insertFirst( [key,value] ));
        }else{
            if(this.size < this.maxSize){
                this.myMap.set(key, this.list.insertFirst( [key,value] ));
                this.size++;
            }else{
                let key3 = this.list.removeLast().getValue()[0];
                this.myMap.delete(key3);
                this.myMap.set(key, this.list.insertFirst( [key,value] ));
            }
        }
    }
}
