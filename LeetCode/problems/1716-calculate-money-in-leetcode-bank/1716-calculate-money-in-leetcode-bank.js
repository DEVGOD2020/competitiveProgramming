/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
    let AS = (n) => { return (n / 2) * (n + 1); }

    let prevWeeks = Math.floor(n / 7) * AS(7) +
    7 * AS(Math.floor(n / 7) - 1);

    let currWeek = AS((n % 7)) + 
    (Math.floor(n / 7) ) * ((n % 7));
    
    return prevWeeks + currWeek
};
