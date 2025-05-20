/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    let startDays = Date.parse(date.slice(0,4)+"-01-01") / 
    (1000*60*60*24);

    let endDays = Date.parse(date) / 
    (1000*60*60*24);

    return (endDays-startDays)+1;
};
