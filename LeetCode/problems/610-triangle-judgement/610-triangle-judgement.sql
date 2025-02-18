# Write your MySQL query statement below
SELECT *, IF(x+y>z and y+z>x and x+z>y, 'Yes', 'No') as Triangle
FROM Triangle