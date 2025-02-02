process.stdin.on('data', (data) => {
    let line = data.toString();
    let score = 0;
    for(let chr of line){
        if(chr == "4" || chr == "7"){
            score++;
        }
    }
    if(score == 4 || score == 7){
        console.log("YES");
    }else{
        console.log("NO");
    }
    return 0;
});