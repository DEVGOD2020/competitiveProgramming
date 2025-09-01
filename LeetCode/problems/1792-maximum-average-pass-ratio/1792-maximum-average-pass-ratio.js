/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function(classes, extraStudents) {
    let grades = new MaxPriorityQueue( (el) => el[1] );
    let total = 0;
    for(let classz of classes){
        let grade = (classz[0]/classz[1]);
        grades.enqueue( [ classz, 
            ((classz[0]+1)/(classz[1]+1)) - grade
        ]);
        total += grade;
    }

    for(let I = 0; I<extraStudents; I++){
        let [classz, grade] = grades.dequeue();
        total -= classz[0]/classz[1];
        classz[0]++; 
        classz[1]++;
        total += classz[0]/classz[1];
        grades.enqueue( [classz, 
            ((classz[0]+1)/(classz[1]+1)) - classz[0]/classz[1]
        ]);
    }

    return total/classes.length;
};
