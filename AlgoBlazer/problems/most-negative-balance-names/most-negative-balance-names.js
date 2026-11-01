function mostIndebted(borrowers, lenders, amounts) {
    let myMap = new Map();
    for(let I = 0; I<borrowers.length; I++){
        myMap.set( borrowers[I], (myMap.get(borrowers[I])??0)-amounts[I]);
        myMap.set( lenders[I], (myMap.get(lenders[I])??0)+amounts[I]);
    }

    const min = Math.min(...myMap.values());
    return [...myMap.keys()].sort((a,b)=>a.localeCompare(b)).filter((el=>myMap.get(el)==min));
}