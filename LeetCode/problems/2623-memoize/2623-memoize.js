/**
 * @param {Function} fn
 */
function memoize(fn) {
    let memory;
    let memory2;
    let value;
    return function(...args) {
        if(memory == undefined){
            memory = fn;
        }
        if(memory2 == undefined){
            memory2 = args;
        }
        if(value == undefined){
            value = fn(...args);
        }

        if(fn != memory || JSON.stringify(memory2) != JSON.stringify(args) ){
            memory = fn;
            memory2 = args;
            value = fn(...args);
        }

        return value;
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */