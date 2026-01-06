/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
    let arr = [];
    let blah = function(root,level=0){
        if(root == null){return;}
        arr[level] = (arr[level]|0) + root.val;
        if(root.left){blah(root.left,level+1);}
        if(root.right){blah(root.right,level+1);}
    }
    blah(root);
    return arr.indexOf(Math.max(...arr))+1;
};
