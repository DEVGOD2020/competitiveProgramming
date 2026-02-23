/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    let nums = s.split("").filter( (el)=> /\d/.test(el));
    let chars = s.split("").filter( (el)=> /[a-z]/.test(el));

    if( Math.abs( nums.length-chars.length) > 1){
        return "";
    }

    if(nums.length >= chars.length){
        return _.zip(nums,chars).flat().join("");
    }

    if(nums.length < chars.length){
        return _.zip(chars,nums).flat().join("");
    }
};
