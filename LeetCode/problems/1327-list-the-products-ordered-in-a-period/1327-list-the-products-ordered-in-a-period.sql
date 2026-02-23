# Write your MySQL query statement below
SELECT products.product_name, SUM(orders.unit) as unit
FROM products
LEFT JOIN orders
ON orders.product_id = products.product_id
WHERE MONTH(orders.order_date) = 2 AND YEAR(orders.order_date) = 2020
GROUP BY products.product_id
HAVING sum(orders.unit) >= 100;
