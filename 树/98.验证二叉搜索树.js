var isValidBST = function(root) {  
    return isValidBSTHelper(root, -Infinity, Infinity);  
};  
  
function isValidBSTHelper(node, lower, upper) {  
    if (node === null) {  
        return true;  
    }  
      
    if (node.val <= lower || node.val >= upper) {  
        return false;  
    }  
      
    return isValidBSTHelper(node.left, lower, node.val) && isValidBSTHelper(node.right, node.val, upper);  
}