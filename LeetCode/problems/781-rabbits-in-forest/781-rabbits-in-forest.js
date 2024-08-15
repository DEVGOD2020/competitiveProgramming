/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
    let sum = 0;
    const countZeros = answers.filter((element) => element === 0).length;
    sum += countZeros;

    const uniqueArray = [...new Set(answers.filter((element) => element !== 0))];
    sum += uniqueArray.reduce((accumulator, currentValue) => accumulator + (currentValue+1), 0);

    return sum;
};