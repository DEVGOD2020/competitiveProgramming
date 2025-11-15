# Write your MySQL query statement below
SELECT E.employee_id FROM Employees as E
LEFT JOIN Employees as B ON E.manager_id = B.employee_id
WHERE E.salary < 30000 AND B.employee_id IS NULL AND E.manager_id IS NOT NULL
ORDER BY employee_id
