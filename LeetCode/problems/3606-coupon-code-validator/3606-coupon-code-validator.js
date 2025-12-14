/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
var validateCoupons = function (code, businessLine, isActive) {
    return _.zip(businessLine, code, isActive).filter( (e) =>["electronics","grocery", "pharmacy", "restaurant"].includes(e[0]) && e[1].match(/^\w+$/g) && e[2]).sort().map((e) => e[1]);
};
