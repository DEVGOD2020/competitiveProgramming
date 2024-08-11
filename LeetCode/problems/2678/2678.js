/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
    return details.filter(
        (el) => {
            return parseInt(el[11] + '' + el[12]) > 60
        }
    ).length;
};