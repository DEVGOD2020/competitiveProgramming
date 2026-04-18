SELECT ROUND(AVG(order_date=customer_pref_delivery_date)*100,2) as immediate_percentage
FROM(
    SELECT *, 
    rank() over (partition BY customer_id order by order_date) as R
    FROM Delivery
) t
WHERE R=1
