function multiTapEncode(s) {
    let ans = "";
    let prev = -1;
    for(let chr of s){
        if(chr == " "){continue;}
        chr = chr.toUpperCase();
        if(chr.charCodeAt(0)-65 <= 2){
            if(prev == "2"){ans += "#";}
            prev = "2";
            ans += "2".repeat(chr.charCodeAt(0)-65+1);
        }
        else if(chr.charCodeAt(0)-65-3 <= 2){
            if(prev == "3"){ans += "#";}
            prev = "3";
            ans += "3".repeat(chr.charCodeAt(0)-65-3+1);
        }
        else if(chr.charCodeAt(0)-65-6 <= 2){
            if(prev == "4"){ans += "#";}
            prev = "4";
            ans += "4".repeat(chr.charCodeAt(0)-65-6+1);
        }
        else if(chr.charCodeAt(0)-65-9 <= 2){
            if(prev == "5"){ans += "#";}
            prev = "5";
            ans += "5".repeat(chr.charCodeAt(0)-65-9+1);
        }
        else if(chr.charCodeAt(0)-65-12 <= 2){
            if(prev == "6"){ans += "#";}
            prev = "6";
            ans += "6".repeat(chr.charCodeAt(0)-65-12+1);
        }
        else if(chr.charCodeAt(0)-65-15 <= 3){
            if(prev == "7"){ans += "#";}
            prev = "7";
            ans += "7".repeat(chr.charCodeAt(0)-65-15+1);
        }
        else if(chr.charCodeAt(0)-65-19 <= 2){
            if(prev == "8"){ans += "#";}
            prev = "8";
            ans += "8".repeat(chr.charCodeAt(0)-65-19+1);
        }
        else if(chr.charCodeAt(0)-65-22 <= 3){
            if(prev == "9"){ans += "#";}
            prev = "9";
            ans += "9".repeat(chr.charCodeAt(0)-65-22+1);
        }
    }
    return ans;
}
