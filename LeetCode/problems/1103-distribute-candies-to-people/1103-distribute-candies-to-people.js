/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    let arr = new Array(num_people).fill(0);

    let arSum = (n) => {return (n+1)*(n/2); }
    let personSum = (row,col) => {return (num_people-1)*arSum(row-1)+arSum(row)+row*col;}

    let targetPeople = 1;
    while(arSum(targetPeople) <= candies){
        targetPeople++;
    }
    targetPeople--;

    let extraPersonIndex = targetPeople % num_people;
    let minRows = Math.floor(targetPeople/num_people);

    for(let I = 0; I<num_people; I++){
        arr[I] = personSum(minRows + (I<extraPersonIndex?1:0), I);
    }

    arr[extraPersonIndex] += (candies-arSum(targetPeople));
    
    return arr;
};