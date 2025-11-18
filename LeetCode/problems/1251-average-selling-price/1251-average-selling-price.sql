# Write your MySQL query statement below
SELECT p.product_id, IFNULL(ROUND(SUM(U.units*P.price)/SUM(U.units),2),0) as average_price
FROM Prices P
LEFT JOIN UnitsSold U ON P.product_id = U.product_id AND
u.purchase_date BETWEEN p.start_date AND end_date
GROUP BY p.product_id;
