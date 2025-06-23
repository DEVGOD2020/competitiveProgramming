/**
 * @param {string} caption
 * @return {string}
 */
var generateTag = function(caption) {
    if(caption.trim().length == 0){return "#";}
    return "#"+caption.trim()
    .replace(/\s+/g, " ")
    .toLowerCase()
    .split(" ")
    .map(
        (el,I)=>
            I>0 ? el[0].toUpperCase()+el.slice(1,el.length) : 
            el[0].toLowerCase()+el.slice(1,el.length)
    )
    .join("")
    .slice(0,99);
};
