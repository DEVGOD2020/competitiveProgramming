# Write your MySQL query statement below
SELECT employee_id, 
if(employee_id%2 and LEFT(name, 1) != 'M',salary,0) as bonus
FROM Employees
ORDER BY employee_id
