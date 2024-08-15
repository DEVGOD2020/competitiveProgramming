/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    
    while(students.length > 0){
        if(students[0] !== sandwiches[0]){
            students.push( students.shift() );
        }else{
            students.shift();
            sandwiches.shift();
        }

        if(!students.includes(sandwiches[0])){
            return students.length;
        }
    }

    return 0;
};