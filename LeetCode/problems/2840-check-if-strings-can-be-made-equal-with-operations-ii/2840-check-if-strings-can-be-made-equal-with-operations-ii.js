/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkStrings = function(s1, s2) {
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    let arr4 = [];
    for(let I = 0; I<s1.length; I++){
        if(I%2==0){
            arr1.push(s1[I]);
            arr2.push(s2[I]);
        }else{
            arr3.push(s1[I]);
            arr4.push(s2[I]);
        }
    }

    let A = arr1.sort().join("");
    let B = arr2.sort().join("");
    let C = arr3.sort().join("");
    let D = arr4.sort().join("");

    return A==B && C==D;
};
