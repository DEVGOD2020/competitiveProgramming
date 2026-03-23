SELECT ROUND(
    SUM( if(DATEDIFF(event_date,min_date)=1,1,0) ) / 
    COUNT(distinct player_id)
    ,2
    ) as fraction
FROM (
    SELECT player_id,
    MIN(event_date) OVER(partition by player_id) as min_date,
    event_date
    From Activity
) t
