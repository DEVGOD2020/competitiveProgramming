# Write your MySQL query statement below
SELECT name from SalesPerson
WHERE sales_id NOT IN (
    SELECT sales_id FROM Orders
    WHERE com_id IN (Select com_id FROM Company WHERE name = "RED")
)
