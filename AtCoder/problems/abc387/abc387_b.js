process.stdin.on('data', (data) => {
    let A = parseInt(data.toString().trim())
    let score = 0;
      for(let row = 1; row<=9; row++){
          for(let col=1; col<=9; col++){
              if(row*col !== A){
                  score += row*col;
              }
          }
      }
      console.log(score);
});