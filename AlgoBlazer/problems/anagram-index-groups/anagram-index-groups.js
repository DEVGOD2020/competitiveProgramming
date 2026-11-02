function anagramIndexGroups(words) {
    let myMap = new Map();
    for(let I = 0; I<words.length; I++){
        let sorted = words[I].split("").sort().join("");
        if(!myMap.has(sorted)){
            myMap.set(sorted,[]);
        }
        myMap.get(sorted).push(I);
    }
    return [...myMap.values()];
}