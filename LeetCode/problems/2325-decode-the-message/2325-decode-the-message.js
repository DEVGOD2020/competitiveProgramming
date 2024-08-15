/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    let mySet = new Set();
    for(let chr of key){
        if(chr != " "){
            mySet.add(chr);
        }
    }

    let myMap = new Map();
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let I = 0;
    for(let thisKey of mySet){
        myMap.set(thisKey,alpha[I]);
        I++;
    }
    myMap.set(" "," ");

    let newStr = "";
    for(let chr of message){
        newStr += myMap.get(chr);
    }

    return newStr;
};