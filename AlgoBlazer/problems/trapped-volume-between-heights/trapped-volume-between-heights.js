function trappedVolumeBetweenHeights(heights) {
    let DP = Array.from(
        {length:heights.length},()=>new Array(2).fill(0)
    );

    for(let L = 0; L<heights.length; L++){
        DP[L][0] = Math.max(heights[L-1]??0,DP[L-1]?.[0]??0);
    }
    for(let R = heights.length-1; R>=0; R--){
        DP[R][1] = Math.max(heights[R+1]??0,DP[R+1]?.[1]??0);
    }

    let score = 0;
    for(let I = 0; I<heights.length; I++){
        score += Math.max(0, Math.min(DP[I][0],DP[I][1])-heights[I] );
    }

    return score;
}