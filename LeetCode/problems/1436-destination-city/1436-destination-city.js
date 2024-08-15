/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let cities = new Map();

    for(let path of paths){
        if(!cities.has(path[0])){
            cities.set(path[0],0);
        }
        if(!cities.has(path[1])){
            cities.set(path[1],0);
        }

        cities.set(path[0],cities.get(path[0])+1);
        cities.set(path[1],cities.get(path[1])-1);
    }

    return [...cities].sort(function(a,b){
        return b[1]-a[1];
    })[cities.size-1][0];
};