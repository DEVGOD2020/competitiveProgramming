/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function(expression) {
    expression = expression.replaceAll("t","true")
        .replaceAll("f","false")
        .replaceAll("!(","x(")
        .replaceAll("|(","y(")
        .replaceAll("&(","z(");

    expression = "function x(n){return !(n)}"+expression;
    expression = "function y(...n){let ans=false; for(let a of n){ans = ans||a} return ans}"+expression;
    expression = "function z(...n){let ans=true; for(let a of n){ans = ans&&a} return ans}"+expression;
    
    let result = eval(expression);
    return result;
};