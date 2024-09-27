# Write your MySQL query statement below
select worker.name as Employee from Employee as boss
inner join Employee worker on boss.id=worker.managerID 
where boss.salary<worker.salary;