var maximum69Number  = function(num) {

    let numArr = num.toString().split("")
    const size = numArr.length;

    for (let i=0; i < size; i++){
        if (numArr[i] === "6"){
            numArr[i] = "9";
            break;
        }
    }

   return Number(numArr.join(""))
};