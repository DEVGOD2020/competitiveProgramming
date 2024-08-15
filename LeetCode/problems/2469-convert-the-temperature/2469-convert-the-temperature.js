/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    const k = celsius+273.15;
    const f = celsius*1.80+32;
    return [k,f];
};