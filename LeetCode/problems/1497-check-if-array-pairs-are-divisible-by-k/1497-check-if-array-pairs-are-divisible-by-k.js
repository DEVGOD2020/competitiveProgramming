/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */

//I cant feel my head
//[1,2,3,4,5,6]
//K = 3;
//X = (3-1)%3;
//X = start 2, 5, 8, ect
//2+1 = 3%3, (5+1)%3==0, ect

//((el%k)+k)%k Forces modulo to be positive, even for negative el :)
var canArrange = function(arr, k){
    let myMap = new Map();

    for(let el of arr){
        let rem = ( (el%k)+k )%k ;
        let target = (k-rem)%k;

        //We can do remainder and target in the map
        //Increase the remainder, and decrease the target
        //k=2 is butthole, so then we just cancel out remindars
        //for k=2 and k=1, rem and target would be the same
        if(rem != target){
            myMap.set(rem, (myMap.get(rem)|0) + 1);
            myMap.set(target, (myMap.get(target)|0) - 1);
        }else{
            myMap.set(rem, myMap.get(rem)^1);
        }
    }

    //Pretty trashy way of making sure myMap only has zeros for vals :)
    return Array.from(myMap.values()).filter( el=>el!=0 ).length == 0;
};