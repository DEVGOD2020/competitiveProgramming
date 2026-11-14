let lines = require('fs').readFileSync(0,"utf8").split("\n");

let part1 = function(){
    let X = 1;
    let Y = 1;
    let ans = 0;
    for(let line of lines){
        for(let chr of line){
            if(chr == "L" && X>0){ X--; }
            if(chr == "R" && X<2){ X++; }
            if(chr == "U" && Y>0){ Y--; }
            if(chr == "D" && Y<2){ Y++; }
        }
        ans += "123456789"[Y*3+X%3];
    }
    console.log(ans);
}

let part2 = function(){
    let X = 0;
    let Y = 2;
    const str = "XX1XXX234X56789XABCXXXDXX";
    let ans = "";
    for(let line of lines){
        for(let chr of line){
            if(chr == "L" && X>0 && (str[Y*5+(X-1)%5]??"X") != "X"){ X--; }
            if(chr == "R" && X<4 && (str[Y*5+(X+1)%5]??"X") != "X"){ X++; }
            if(chr == "U" && Y>0 && (str[(Y-1)*5+(X)%5]??"X") != "X"){ Y--; }
            if(chr == "D" && X<4 && (str[(Y+1)*5+(X)%5]??"X") != "X"){ Y++; }
        }
        ans += str[Y*5+X%5];
    }
    console.log(ans);
}

part1();
part2();
