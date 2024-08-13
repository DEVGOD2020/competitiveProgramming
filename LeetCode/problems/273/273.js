/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    let myMap = new Map();
    //Ones
    myMap.set(1,"One");
    myMap.set(2,"Two");
    myMap.set(3,"Three");
    myMap.set(4,"Four");
    myMap.set(5,"Five");
    myMap.set(6,"Six");
    myMap.set(7,"Seven");
    myMap.set(8,"Eight");
    myMap.set(9,"Nine");
    myMap.set(10,"Ten");
    myMap.set(11,"Eleven");
    myMap.set(12,"Twelve");
    myMap.set(13,"Thirteen");
    myMap.set(14,"Fourteen");
    myMap.set(15,"Fifteen");
    myMap.set(16,"Sixteen");
    myMap.set(17,"Seventeen");
    myMap.set(18,"Eighteen");
    myMap.set(19,"Nineteen");

    //Ten digits
    myMap.set(20,"Twenty");
    myMap.set(30,"Thirty");
    myMap.set(40,"Forty");
    myMap.set(50,"Fifty");
    myMap.set(60,"Sixty");
    myMap.set(70,"Seventy");
    myMap.set(80,"Eighty");
    myMap.set(90,"Ninety");

    //other
    myMap.set(10e1, "Hundred");
    myMap.set(10e2, "Thousand");
    myMap.set(10e5, "Million");
    myMap.set(10e8, "Billion");

    let expos = [10e8,10e5,10e2,10e1];
    function word(n){
        //Zero Case
        if(n === 0){ return []; }

        //1 to 19
        if(n <= 19){ return [myMap.get(n)]; }

        //20 to 99
        if(n <= 99){
            return [myMap.get( Math.floor(n/10)*10), ...word(n % 10)];
        }
        
        //Everything else
        for(const expo of expos){
            if( Math.floor(n/expo) > 0){
                return [
                    ...word(Math.floor(n/expo)),
                    myMap.get(expo),
                    ...word(n%expo)
                ];
            }
        }
        
        return [];
    }    

    return word(num).join(' ') || "Zero";
};