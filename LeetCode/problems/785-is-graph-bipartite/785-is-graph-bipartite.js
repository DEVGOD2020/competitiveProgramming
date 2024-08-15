/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    let temp = [];
    let I = 0;
    while(I<graph.length){
        const child = graph[I];
        if( !temp.includes(child) ){
           temp.push(child);
        }
        I++;
    }


    console.log(temp);

    return false;
};