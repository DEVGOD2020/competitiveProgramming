SELECT name
FROM Employee
JOIN (
    SELECT managerId, count(managerId) as cnt
    From Employee
    GROUP BY managerId
) as b ON Employee.id = b.managerId
WHERE b.cnt >= 5
