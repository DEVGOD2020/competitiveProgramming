/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {

    let numSign = s.split('').filter( (data) => data == '+' || data == '-' ).length;
    let numE = s.split('').filter( (data) => data == 'e' || data == 'E' ).length;
    let numDot = s.split('').filter( (data) => data == '.' ).length;

    let eIndex = s.split('').findIndex( (data) => data == 'e' || data == 'E' );
    let signIndex = s.split('').findIndex( (data) => data == '+' || data == '-' );
    let dotIndex = s.split('').findIndex( (data) => data == '.' );

    console.log(eIndex);
    return (numE <= 1 && numDot <= 1 && numSign <=1) && 
    (eIndex !== s.length-1 && eIndex !==0 && signIndex <= 0 && dotIndex !== s.length-1);
};