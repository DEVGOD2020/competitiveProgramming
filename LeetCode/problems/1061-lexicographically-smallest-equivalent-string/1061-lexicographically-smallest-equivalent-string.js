/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */

var smallestEquivalentString = function(s1, s2, baseStr) {
    let myMap = new Map();

    let find = function(root){
        if(!myMap.has(root)){ myMap.set(root,root); }
        if(myMap.get(root) === root){ return root; }
        myMap.set(root, find(myMap.get(root)) );
        return myMap.get(root);
    }

    let union = function(root1, root2){
        let uwu = find(root1);
        let owo = find(root2);
        if(uwu === owo){return;}
        if(uwu < owo){
            myMap.set(owo, uwu);
        }else{
            myMap.set(uwu, owo);
        }
    }

    for(let I = 0; I<s1.length; I++){
        union(s1[I],s2[I]);
    }

    return [...baseStr].map( (chr)=> find(chr) ).join('');

};
