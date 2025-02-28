process.stdin.on('data', (data) => {
    let line = data.toString().trim();
    let ans = line.split("").reduce( 
        (sum, el)=> sum += +(/[a-z]/.test(el)),0
    ) >= Math.ceil(line.length/2) ? line.toLowerCase() : line.toUpperCase();
    console.log(ans);
});