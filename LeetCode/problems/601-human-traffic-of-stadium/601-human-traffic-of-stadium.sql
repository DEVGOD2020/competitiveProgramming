WITH blah as (
    SELECT *,id - ROW_NUMBER() OVER (ORDER BY visit_date) as g
    FROM Stadium
    WHERE people >=100
),
UWU as (
    SELECT g from blah GROUP BY g HAVING COUNT(g) >=3
)

SELECT id, visit_date,people
FROM blah
WHERE g in (SELECT g from UWU)
ORDER BY visit_date

