class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function longestConsecutiveRun(nums) {
    let myMap = new Map();
    for(let num of nums){
        if(myMap.has(num)){ continue; }
        
        let prev = myMap.get(num-1);
        let node = new Node(num);
        let next = myMap.get(num+1);

        myMap.set(num,node);

        if(prev) prev.next = node;
        if(next) node.next = next;
    }

    let ans = 0;
    for(let node of myMap.values()){
        let temp = 0;
        while(node){
            temp++;
            myMap.delete(node.val);
            node = node.next;
        }
        if(temp > ans) ans = temp;
    }
    return ans;
}