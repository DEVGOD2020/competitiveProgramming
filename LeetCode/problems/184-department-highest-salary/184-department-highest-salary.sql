SELECT D.name as Department, E.name as Employee, E.salary as Salary 
FROM Employee E JOIN Department D
ON E.departmentId = D.id
WHERE E.salary=(
    SELECT max(Salary) from Employee E2 where E2.DepartmentId=D.id
)
