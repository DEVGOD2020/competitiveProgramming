/**
 * @param {string} expression
 * @return {string}
 */

var gcd = function(a, b) {
  if (!b) {
    return a;
  }

  return Math.abs(gcd(b, a % b));
}

var fractionAddition = function(expression) {
    let arr = [...expression.match(/-?(\d+)\/(\d+)/g)];
    if(arr.length <= 1){
        return expression;
    }

    let bottomNum = parseInt(arr[0].split("/")[1])*parseInt(arr[1].split("/")[1]);
    let topNum = parseInt(arr[0].split("/")[0])*parseInt(arr[1].split("/")[1]);
    topNum += parseInt(arr[0].split("/")[1])*parseInt(arr[1].split("/")[0]);
    for(let I = 2; I<arr.length; I++){
        let Top = parseInt(arr[I].split("/")[0])
        let Bottom = parseInt(arr[I].split("/")[1]);
        topNum = topNum*Bottom+Top*bottomNum;
        bottomNum *= Bottom;
    }

    if(topNum>0 && bottomNum<0){
        topNum *= -1;
        bottomNum *= -1;
    }

    return topNum/gcd(topNum,bottomNum)+"/"+bottomNum/gcd(topNum,bottomNum);
};