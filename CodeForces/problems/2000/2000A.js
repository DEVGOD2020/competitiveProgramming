process.stdin.on('data', (data) => {
    let lines = data.toString().split(/\r?\n/);
    for(let I = 1; I<=Number(lines[0]); I++){
        let line = Number(lines[I]);
        let ans = (line >= 102 && line <= 109) || (line >= 1010 && line <= 1099);
        console.log(ans ? "YES" : "NO")
    }
});