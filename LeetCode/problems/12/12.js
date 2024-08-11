/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let PQ = MaxPriorityQueue.from([
    ['I',1],
    ['IV',4],
    ['V',5],
    ['IX',9],
    ['X',	10],
    ['XL', 40],
    ['L',	50],
    ['XC', 90],
    ['C',	100],
    ['CD',	400],
    ['D',	500],
    ['CM',	900],
    ['M',	1000]]);

    let newStr = "";
    while(num > 0 && !PQ.isEmpty()){
        let el = PQ.dequeue();
        while(el['priority'] <= num){
            num += -el['priority'];
            newStr += el['element'];
        }
    }

    return newStr;
};