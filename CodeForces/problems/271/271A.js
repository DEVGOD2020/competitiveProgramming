process.stdin.on('data', (data) => {
    let lines = data.toString().split("\n");
    for(let line of lines){
        let year = parseInt(line.toString().trim())+1;
        while(year < 10000){
            if(new Set(String(year)).size == String(year).length){
                console.log(year);
                break;
            } 
            year++;
        }
    }
    return 0;
});