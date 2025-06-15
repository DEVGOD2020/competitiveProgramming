/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(n, dislikes) {
    let parent = _.range(n+1);
    let find = function(root){
        if(parent[root] == root){
            return root;
        }
        
        parent[root] = find( parent[root] );
        return parent[root];
    }

    let union = function(root1,root2){
        let parent1 = find(root1);
        let parent2 = find(root2);

        if (parent1 === parent2) return;

        if(parent1 < parent2){
            parent[parent2] = parent1;
        }else{
            parent[parent1] = parent2;
        }
    }

    let graph = {};
    for(let [X,Y] of dislikes){
        if(!graph[X]){
            graph[X] = [];
        }
        if(!graph[Y]){
            graph[Y] = [];
        }
        graph[X].push(Y);
        graph[Y].push(X);
    }

    for(let I = 0; I<n; I++){
        if(graph[I]){
            let firstChild = graph[I][0];
            for(let child of graph[I]){
                if( find(I) === find(child) ){return false};
                union(firstChild, child);
            }
        }
    }

    return true;
};
