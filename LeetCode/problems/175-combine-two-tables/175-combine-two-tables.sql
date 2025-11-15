# Write your MySQL query statement below
SELECT firstName,lastName,city,state 
FROM Person AS P
LEFT JOIN Address AS A 
ON A.personId = P.personId
