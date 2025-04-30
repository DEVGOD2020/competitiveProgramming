process.stdin.on('data', (data) => {
    let lines = data.toString().trim().split("\n");
    let logged = false;
    let errors = 0;
    for(let I = 1; I<=Number(lines[0]); I++){
        let line = lines[I];
        if(line === "login"){
            logged = true;
        }
        if(line === "logout"){
            logged = false;
        }
        if(line === "private" && !logged){
            errors++;
        }
    }
    console.log(errors);
});