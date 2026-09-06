class maxHeap{
  constructor(){
    this.heap = [];
  }
  push(el){
    this.heap.push(el);
    this.elementsUp();
  }
  pop(){
    if(this.heap.length > 0){
      let ans = this.heap[0];
      this.heap[0] = this.heap[this.heap.length-1];
      this.heap.pop();
      this.elementsDown();
      return ans;
    }
  }
  elementsUp(I=this.heap.length-1){
    let root = Math.floor((I-1)/2);
    if(I > 0 && this.heap[root] < this.heap[I]){
      [this.heap[root],this.heap[I]] = [this.heap[I],this.heap[root]];
      this.elementsUp(root);
    }
  }
  elementsDown(I=0){
    let left = 2*I+1;
    let right = 2*I+2;
    let large = I;
    if(left < this.heap.length && this.heap[left] > this.heap[large]){
      large = left;
    }
    if(right < this.heap.length && this.heap[right] > this.heap[large]){
      large = right;
    }
    if(large != I){
      [this.heap[large],this.heap[I]] = [this.heap[I],this.heap[large]];
      this.elementsDown(large); 
    }
  }
}
function lastRemainingWeight(weights) {
    let HP = new maxHeap();
    for(let w of weights){
      HP.push(w);
    }
    while(HP.heap.length > 1){
      let Y = HP.pop();
      let X = HP.pop();
      if(X!=Y){
        HP.push(Y-X);
      }
    }
   return HP.heap.length == 0 ? 0 : HP.heap.pop();
}
