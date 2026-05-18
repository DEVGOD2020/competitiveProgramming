/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
    return new Date(Date.parse(date.replace(/.. /,""))).toISOString().slice(0, 10);
};
