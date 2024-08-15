/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
    const indegree = new Array(numCourses).fill(0);
    const queue = [];
    const order = [];

    for (const [course, prereq] of prerequisites) {
        indegree[course] += 1;
    }
    for (let i = 0; i < indegree.length; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }
    let count = 0;
    while (queue.length !== 0) {
        const node = queue.pop();
        count += 1;
        for (const [course, prereq] of prerequisites) {
            if (prereq === node) {
                indegree[course] -= 1;
                if (indegree[course] === 0) {
                    queue.push(course);
                }
            }
        }
        order.push(node);
    }

    if(count < numCourses){return [];}
    return order;
};