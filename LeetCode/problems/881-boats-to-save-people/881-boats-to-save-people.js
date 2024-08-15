/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort(function(a,b){return a-b;});

    let L = 0;
    let R = people.length-1;
    let ans = 0;

    while(L<=R){
        if(people[L]+people[R] <= limit){
            L++;
        }
        R--;
        ans++;
    }

    return ans;
};

//1,2,3,4,5,6,7,8,9,10

//1,2,3,4
//5
//6
//7
//8
//9
//10

//10
//1,9
//2,8
//3,7
//4,6
//5

