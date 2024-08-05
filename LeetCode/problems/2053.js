var kthDistinct = function(arr, k) {
    let myMap = _.countBy(arr);
    let keys = Object.keys(myMap).filter( (key) => myMap[key] === 1)
    return keys[k-1] !== undefined ? keys[k-1] : "";
};