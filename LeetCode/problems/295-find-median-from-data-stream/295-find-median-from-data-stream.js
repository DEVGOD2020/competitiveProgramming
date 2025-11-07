class MedianFinder {
    constructor(){
        this.minPQ = new MinPriorityQueue();
        this.maxPQ = new MaxPriorityQueue();
        this.blah = true;
    }
    addNum( num ){
        if(this.blah){
            this.maxPQ.push(num);
            this.minPQ.push( this.maxPQ.pop() );
        }else{
            this.minPQ.push(num);
            this.maxPQ.push( this.minPQ.pop() );
        }
        this.blah = !this.blah;
    }
    findMedian(){
        if(this.blah){
            return (this.minPQ.front()+this.maxPQ.front())/2;
        }else{
            return this.minPQ.front();
        }
    }
};
