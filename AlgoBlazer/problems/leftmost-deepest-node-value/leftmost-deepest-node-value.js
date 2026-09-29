function leftmostDeepestValue(root) {
    let deque = new Deque([root]);
    let ans = root.val;
    while(deque.size()){
        let curr = deque.popFront();
        ans = curr.val;
        if(curr.right){
            deque.pushBack(curr.right);
        }
        if(curr.left){
            deque.pushBack(curr.left);
        }
    }
    return ans;
}
