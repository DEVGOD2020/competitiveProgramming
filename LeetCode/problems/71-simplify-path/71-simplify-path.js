/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let blah = path.split("/");
    let stack = [];
    for(let b of blah){
        if(b == ".."){
            stack.pop();
        }else if(b !== '' && b !== '.'){
            stack.push(b);
        }
    }
    return "/"+stack.join('/');
};
