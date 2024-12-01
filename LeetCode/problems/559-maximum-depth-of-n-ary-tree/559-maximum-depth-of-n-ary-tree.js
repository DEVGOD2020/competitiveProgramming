/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root){return 0;}
    let maxDepth = 1;
    let dfs = function(root,depth){
        if(!root){return 0;}
        maxDepth = Math.max(maxDepth,depth);
        for(let child of root.children){
            dfs(child,depth+1);
        }
        return 0;
    }

    dfs(root,1);
    return maxDepth;
};

