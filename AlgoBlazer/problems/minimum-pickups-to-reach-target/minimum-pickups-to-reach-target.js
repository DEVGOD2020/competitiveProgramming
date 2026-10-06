function minPickupsToReach(target, initialUnits, supplies) {
    let spots = new MaxPriorityQueue();
    let curr = initialUnits;
    let score = 0;
    let R = 0;
    while(true){
        while(R<supplies.length && curr >= supplies[R][0]){
            spots.push(supplies[R][1]);
            R++;
        }
        if(curr >= target){return score;}
        if(!spots.isEmpty()){
            let amount = spots.pop();
            curr += amount;
            score++;
        }else{
            return -1;
        }
    }
}