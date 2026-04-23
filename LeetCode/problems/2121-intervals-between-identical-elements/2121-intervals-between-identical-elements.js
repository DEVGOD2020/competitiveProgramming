/**
 * @param {number[]} arr
 * @return {number[]}
 */
var getDistances = function(arr) {
    let myMap = new Map();
    let prevMap = new Map();
    let ans = [];
    for(let I = 0; I<arr.length; I++){
        if(!myMap.has(arr[I])){
            prevMap.set(arr[I],0);
            myMap.set(arr[I],[I]);
        }else{
            myMap.get(arr[I]).push(myMap.get(arr[I]).at(-1)+I);
        }
    }
    for(let I = 0; I<arr.length; I++){
        const NUM = arr[I];
        let prev = prevMap.get(NUM);
        prevMap.set(NUM,prev+1);

        let right = myMap.get(NUM).at(-1);
        let curr = myMap.get(NUM)[prev]??0;
        let left = myMap.get(NUM)[prev-1]??0;

        ans.push( 
            (right-curr)
            -left 
            +(2*prev-myMap.get(NUM).length+1)*I
        );
    }
    return ans;
};
