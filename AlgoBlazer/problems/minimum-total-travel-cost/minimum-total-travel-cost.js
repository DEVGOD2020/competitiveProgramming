function minimumTravelCost(counts, xs, ys) {
    let XC = _.zip(xs,counts);
    XC.sort( (a,b)=> a[0]-b[0]);
    let YC = _.zip(ys,counts);
    YC.sort( (a,b)=> a[0]-b[0]);


    let total = 0;
    for(let [x,c] of XC){
      total += c;
    }
    let xMean = 0;
    for(let [x,c] of XC){
      xMean += c;
      if(xMean >= Math.ceil(total/2)){
        xMean = x;
        break;
      }
    }

    total = 0;
    for(let [y,c] of YC){
      total += c;
    }
    let yMean = 0;
    for(let [y,c] of YC){
      yMean += c;
      if(yMean >= Math.ceil(total/2)){
        yMean = y;
        break;
      }
    }
    

    let ans = 0;
    for(let I = 0; I<counts.length; I++){
      ans += counts[I]*( Math.abs(xMean-xs[I]) + Math.abs(yMean-ys[I]) );
    }
    return ans;
}
