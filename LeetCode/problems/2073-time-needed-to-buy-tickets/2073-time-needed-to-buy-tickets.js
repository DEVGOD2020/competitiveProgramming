/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let time = 0;
    let pointer = 0;
    while(tickets[k] > 0){
        if(tickets[pointer] > 0){
            tickets[pointer]--;
            time++;
            pointer++;
        }else{
            pointer++;
        }

        if(pointer > tickets.length){
            pointer = 0;
        }

    }

    return time;
};