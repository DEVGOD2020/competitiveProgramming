process.stdin.on('data', (data) => {
    let A = Number(data.toString().trim());

    if(400%A === 0){
        console.log(400/A);
    }
    else{
        console.log(-1);
    }
});