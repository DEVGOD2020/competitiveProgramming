/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    seats.sort(function(a,b){return a-b;});
    students.sort(function(a,b){return a-b;});

    let score = 0;
    for(let n=0; n<students.length; n++){
        score += Math.abs(seats[n] - students[n]);
    }

    return score;
};