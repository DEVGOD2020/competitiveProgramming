class ProductOfNumbers{
    constructor(){
        this.arr = [1];
        this.prefix = 1;
    }
    add(num){
        if(num === 0){this.arr=[1]; this.prefix=1; return;}
        this.prefix *= num;
        this.arr.push(this.prefix);
    }
    getProduct(k){
        if (k >= this.arr.length){ return 0; }
        return (this.prefix/this.arr[this.arr.length-k-1])||0;
    }
}