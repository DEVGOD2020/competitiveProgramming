/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    let ans = (Math.min(
                new Date(leaveAlice).getTime(),
                new Date(leaveBob).getTime()
            )-Math.max(
                new Date(arriveAlice).getTime(),
                new Date(arriveBob).getTime()
            ))/ (1000 * 60 * 60 * 24) +1;
    return ans > 0 ? ans : 0;
};