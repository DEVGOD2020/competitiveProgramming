function anagramIndexGroups(words) {
    let arr = new Uint32Array(26);
    for(let I = 0; I<26; I++){arr[I] = Math.random()*(1e9-7);}
    let myMap = new Map();
    for(let I = 0; I<words.length; I++){
        const WORD = words[I];
        let HASH = 0;
        for(let C = 0; C<WORD.length; C++){HASH += arr[WORD.charCodeAt(C)-97];}
        let GROUP = myMap.get(HASH);
        if(GROUP==undefined){myMap.set(HASH,[I]);}else{GROUP.push(I)}
    }
    return [...myMap.values()];
}