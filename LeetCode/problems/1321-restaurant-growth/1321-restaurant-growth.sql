SELECT visited_on,
SUM(amount) OVER (
    ORDER BY visited_on 
    RANGE BETWEEN INTERVAL 6 DAY 
    PRECEDING AND CURRENT ROW
) as amount,
ROUND(
    AVG(amount) OVER (
        ORDER BY visited_on 
        RANGE BETWEEN INTERVAL 6 DAY 
        PRECEDING AND CURRENT ROW
    ),
2) as average_amount
FROM (
    SELECT visited_on, SUM(amount) as amount 
    FROM Customer
    GROUP BY visited_on
) t
LIMIT 6,999
