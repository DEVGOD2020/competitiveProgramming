/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    return s.split(/(\d{2}#)/)
        .filter(Boolean)
        .map(
            el=>{
                return el[el.length-1]=="#" ?
                    String.fromCharCode(Number(el[0]+el[1])+96)
                : el.split("").map(
                        (el)=>String.fromCharCode(Number(el)+96)
                ).join("")
            }
        ).join("");
};
