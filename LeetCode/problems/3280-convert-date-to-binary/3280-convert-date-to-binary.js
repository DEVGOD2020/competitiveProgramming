/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    let arr = date.split("-").map( (el)=>parseInt(el));
    return arr[0].toString(2)+"-"+arr[1].toString(2)+"-"+arr[2].toString(2)
};