/**
 * @param {string} bottom
 * @param {string[]} allowed
 * @return {boolean}
 */
var pyramidTransition = function(bottom, allowed) {
  
    let myMap = new Map();
    for(let al of allowed){
      let ID = al[0]+al[1];
      if( !myMap.has(ID) ){
        myMap.set(ID,[]);
      }
      myMap.get(ID).push( al[2] );
    }
    
    let memo = new Set();
    let blah = function(s, newS="", Z=0){
        if(s.length == 1){ return true; }
        if(memo.has(newS)){
            return false; 
        }
        if(newS.length == s.length-1){
            return blah(newS,"",0);
        }
        for(let I = Z; I<s.length-1; I++){
            if( !myMap.has( s[I]+s[I+1] ) ){
              return false;
            }
            for(let al of myMap.get(s[I]+s[I+1]) ){
              if( blah(s, newS+al, I+1) ){
                  return true;
              }
            }
        }
        memo.add(s);
        return false;
    }

    return blah(bottom);
};

