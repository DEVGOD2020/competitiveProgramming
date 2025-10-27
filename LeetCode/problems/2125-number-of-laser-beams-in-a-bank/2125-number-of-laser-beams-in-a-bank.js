/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
    let score = 0;
    let prev = 0;
    for(let row of bank){
        let beam = row.split("")
        .filter( 
            (el)=>el=='1'
        ).length;

        if(beam > 0){
            score += prev*beam;
            prev = beam;
        }
    }
    return score;
};
