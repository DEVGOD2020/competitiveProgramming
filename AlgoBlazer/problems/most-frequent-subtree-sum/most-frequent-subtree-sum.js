function mostFrequentSubtreeSum(root) {
    let myMap = new Map();
    let max = [0,0];
    let trav = function(root){
        if(!root){return 0;}
        let sum = trav(root.left)+trav(root.right)+root.val;
        myMap.set(sum,(myMap.get(sum)??0)+1);
        if(myMap.get(sum) > max[0]){max = [myMap.get(sum),sum]}
        return sum;
    }
    trav(root);
    return max[1];
}