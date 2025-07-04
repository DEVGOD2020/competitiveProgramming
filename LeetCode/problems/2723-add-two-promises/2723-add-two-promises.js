/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    let A = await promise1;
    let B = await promise2;
    return new Promise(
        function(res, err) {
            res(A+B);
        }
    );
};
