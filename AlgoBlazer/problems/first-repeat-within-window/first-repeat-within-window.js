function firstRepeatWithinWindow(ids, timestamps) {
    let myMap = new Map();
    for(let I = 0; I<ids.length; I++){
        if( myMap.has(ids[I]) &&  ( (timestamps[I] - myMap.get(ids[I])) <= 10) ){
            return ids[I];
        }
        myMap.set(ids[I],timestamps[I]);
    }
    return "NONE";
}