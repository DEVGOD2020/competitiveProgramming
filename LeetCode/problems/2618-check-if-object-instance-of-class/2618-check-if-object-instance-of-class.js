/**
 * @param {any} object
 * @param {any} classFunction
 * @return {boolean}
 */

var checkIfInstanceOf = function(obj, classFunction) {
    // Check if obj is null or undefined
    if (obj === null || obj === undefined) {
        return false;
    }

    // Get the prototype of obj
    let proto = Object.getPrototypeOf(obj);

    // Iterate through the prototype chain
    while (proto !== null) {
        // Check if the prototype's constructor is equal to the class function
        if (proto.constructor === classFunction) {
            return true;
        }

        // Get the next prototype in the chain
        proto = Object.getPrototypeOf(proto);
    }

    // If we reach the end of the prototype chain without finding a match, return false
    return false;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */