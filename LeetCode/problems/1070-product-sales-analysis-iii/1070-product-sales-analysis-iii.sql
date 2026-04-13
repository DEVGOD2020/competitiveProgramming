SELECT product_id,year as first_year,quantity,price 
FROM(
    SELECT *, 
    rank() over(partition by product_id order by year) as r
    FROM Sales
) as t
where r=1
