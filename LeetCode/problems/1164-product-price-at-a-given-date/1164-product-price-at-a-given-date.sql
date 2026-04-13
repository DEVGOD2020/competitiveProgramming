SELECT product_id,new_price as price
FROM Products
WHERE (product_id,change_date) in (
    SELECT product_id, MAX(change_date) as change_date
    FROM Products
    WHERE change_date <= '2019-08-16'
    GROUP BY product_id
)

UNION

SELECT DISTINCT product_id, 10 as price
FROM Products
GROUP BY product_id
HAVING MIN(change_date) >= '2019-08-17'

