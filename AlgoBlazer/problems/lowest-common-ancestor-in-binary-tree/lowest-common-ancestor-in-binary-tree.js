function lowestCommonAncestor(root,a,b) {
    let trav = function(root){
        if(!root){return undefined;}
        let LEFT = trav(root.left);
        let RIGHT = trav(root.right);
        let CHECK = ((LEFT!=undefined) && (RIGHT!=undefined)) || (root.val==a) || (root.val==b);
        if(CHECK){
            return root.val;
        }
        if(LEFT != undefined){
            return LEFT;
        }
        return RIGHT;
    }
    return trav(root);
}
