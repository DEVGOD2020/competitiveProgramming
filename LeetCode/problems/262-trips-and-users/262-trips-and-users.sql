SELECT request_at as "Day",
ROUND(sum(IF(status!="completed",1,0))/count(*),2) 
as 'Cancellation Rate' 
FROM (
    SELECT id, client_id,driver_id,city_id, status,request_at 
    FROM Trips
    JOIN Users a ON Trips.client_id = a.users_id
    JOIN Users b ON Trips.driver_id = b.users_id
    WHERE a.banned = "No" AND 
    b.banned = "No" AND 
    request_at BETWEEN '2013-10-01' AND '2013-10-03'
) t
GROUP BY request_at

