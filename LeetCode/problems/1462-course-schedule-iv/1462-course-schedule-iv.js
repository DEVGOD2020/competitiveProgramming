/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function(numCourses, prerequisites, queries) {
    let graph = Array.from({ length: numCourses }, () => []);
    let indegree = new Array(numCourses).fill(0);
    for(let [pastCourse,newCourse] of prerequisites){
        graph[pastCourse].push(newCourse);
        indegree[newCourse]++;
    }

    let DQ = new Deque();
    for(let I = 0; I<indegree.length; I++){
        if(indegree[I] === 0){
            DQ.pushBack( I );
        }
    }

    let needed = Array.from({ length: numCourses }, () => new Set());
    while(!DQ.isEmpty()){
        let node = DQ.popFront();

        for(let child of graph[node]||[]){
            needed[child].add(node);
            for(let otherChild of needed[node]){
                needed[child].add(otherChild);
            }

            indegree[child]--;
            if(indegree[child] === 0){
                DQ.pushBack(child);
            }
        }
    }

    return queries.map( 
        ([oldC,newC])=>needed[newC].has(oldC)
    );
};