function bestDigitSumPair(nums) {
    let myMap = new Map();
    let myMap2 = new Map();
    let ans = -1;
    for(let num of nums){
        let temp = num;
        let ds = 0;
        while(temp > 0){
            ds += temp%10;
            temp = Math.floor(temp/10);
        }
        if(num >= (myMap.get(ds)??0) ){
            myMap2.set(ds, myMap.get(ds));
            myMap.set(ds, num);
        }
        else if(num >= (myMap2.get(ds)??0) ){
            myMap2.set(ds,num);
        }
        ans = Math.max(ans, (myMap.get(ds)??-Infinity) +(myMap2.get(ds)??-Infinity) );
    }
    return ans;
}