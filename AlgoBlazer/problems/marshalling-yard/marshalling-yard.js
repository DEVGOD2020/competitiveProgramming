function marshalTrain(wagons) {
    let L = 0;
    let R = 0;
    while(L<wagons.length){
        if(wagons[L] !== 0){
            wagons[R++] = wagons[L];
        }
        L++;
    }
    while(R<wagons.length){wagons[R++] = 0;}
    return wagons;
}