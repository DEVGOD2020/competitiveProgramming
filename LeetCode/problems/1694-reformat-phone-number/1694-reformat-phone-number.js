/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function(number) {
    return number.replaceAll(/\D/g,"").replaceAll(/(\d{2}\d?(?=\d{2}))/g,"$1-");
};
