/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     public $val = null;
 *     public $left = null;
 *     public $right = null;
 *     function __construct($val = 0, $left = null, $right = null) {
 *         $this->val = $val;
 *         $this->left = $left;
 *         $this->right = $right;
 *     }
 * }
 */
class Solution {

    /**
     * @param TreeNode $root
     * @param TreeNode $subRoot
     * @return Boolean
     */
    function isSubtree($root, $subRoot) {
        $stack = [$root];
        $checkHash = hash('md5',serialize($subRoot));
        while(sizeof($stack) > 0){
            $val = array_pop($stack);
            if($val->left !== null){ array_push($stack,$val->left); }
            if($val->right !== null){ array_push($stack,$val->right); }
            
            if($val->val == $subRoot->val){
                if( hash('md5',serialize($val)) == $checkHash ){
                    return true;
                }   
            }
        }
        return false;
    }

}