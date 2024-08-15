/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2){
    let myString = (str1+""+str2);
    if(str1+str2 !== str2+str1){return "";}
    return myString.slice(0,gcd(str1.length,myString.length));
};

var gcd = function(a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}