let ones = ["","one","two","three","four","five","six","seven","eight","nine"].map( (el)=>el.length);

const teens = ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen", 
               "sixteen", "seventeen", "eighteen", "nineteen"].map( (el)=>el.length);

let tens = ["","ten","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"].map( (el)=>el.length);

let hunds = ["","onehundred","twohundred","threehundred","fourhundred","fivehundred",
             "sixhundred","sevenhundred","eighthundred","ninehundred"
].map( (el)=>el.length);

let getCount = function(n){
    if(n<10){
        return ones[n];
    }
    if(n>10 && n<20){
        return teens[n-10];
    }
    if(n<100){
        return tens[Math.floor(n/10)] + ones[n%10];
    }
    if(n<1000 && (n%100) === 0){
        return hunds[Math.floor(n/100)];
    }
    if(n<1000){
        return hunds[Math.floor(n/100)] + 3 + getCount( n%100 );
    }
}

let ans = 0;
for(let I = 1; I<1000; I++){
    ans += getCount(I);
}

console.log(ans + "onethousand".length);
