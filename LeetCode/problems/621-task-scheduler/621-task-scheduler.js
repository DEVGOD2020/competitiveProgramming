/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let myMap = new Map();
    
    for(let task of tasks){
        if(!myMap.has(task)){
            myMap.set(task,0);
        }
        myMap.set(task, myMap.get(task)+1);
    }

    let maxFreq = Math.max(...myMap.values())
    let maxCount = 0;
    for(let val of myMap.values()){
        if(val == maxFreq){
            maxCount++;
        }
    }

    let score = (maxFreq-1) * (n-(maxCount-1)) + (maxFreq*maxCount);
    if(score < tasks.length){score = tasks.length;}
    
    return score;
}

//A _ _ _ A _ _ _ A | More elements if array is larger then estimate

// (MaxFreq-1)*n + MaxFreq
//(MaxFreq-1) = Amount of inbetween idle spaces
//n = size of inbetween idle spaces
//MaxFreq, amount of inbetween charecters to add

//A B _ _ A B _ _ A B

// (MaxFreq-1) = Amount of inbetween spaces
// (n-MaxCount-1) = size of inbetween idle spaces
// (MaxFreq*MaxCount) = amount of inbetween charecters
//Add more elements of array size is bigger
