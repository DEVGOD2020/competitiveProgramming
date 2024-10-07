# Write your MySQL query statement below
SELECT email FROM Person as Email 
GROUP BY email HAVING COUNT(email) > 1