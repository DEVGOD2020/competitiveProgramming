# Write your MySQL query statement below
SELECT E.name as Employee 
FROM Employee as E
JOIN Employee as B on E.managerId=B.id
WHERE E.salary > B.salary
