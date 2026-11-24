function maximumXorPair(nums) {
    let mask = 0;
    let ans = 0;
    for(let I = 31; I>=0; I--){
        let mySet = new Set();
        mask |= (1<<I);
        let cand = ans | (1<<I);
        for(let num of nums){ mySet.add(num&mask); }
        for(let num of mySet){ if(mySet.has(num^cand)){ans = cand; break;}}
    }
    return ans;
}
