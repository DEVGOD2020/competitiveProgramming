/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isSymmetric = function(root) {
    if(root.left !== null && root.right !== null){
        return t1(root.left).toString() === t2(root.right).toString();
    }else{
        return (root.left === null && root.right === null);
    }
};

let t1 = function(root, str=[]){
    str.push(root.val);
    if(root.left !== null){t1(root.left,str);}
    else{str.push(null);}
    if(root.right !== null){t1(root.right,str);}
    else{str.push(null);}
    return str;
}

let t2 = function(root, str=[]){
    str.push(root.val);
    if(root.right !== null){t2(root.right,str);}
    else{str.push(null);}
    if(root.left !== null){t2(root.left,str);}
    else{str.push(null);}
    return str;
}