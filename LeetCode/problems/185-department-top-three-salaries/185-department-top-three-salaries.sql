SELECT Department,Employee,salary
FROM(
    SELECT Department.name as 'Department',
    Employee.name as 'Employee',
    Employee.salary,
    DENSE_RANK() OVER (PARTITION BY Department.id ORDER BY salary DESC) as rnk
    FROM Employee
    JOIN Department ON Employee.departmentId = Department.id
) t 
WHERE rnk <= 3
