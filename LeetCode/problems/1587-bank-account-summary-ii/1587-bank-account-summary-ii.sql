SELECT NAME, SUM(amount) as BALANCE FROM Users
JOIN Transactions
ON Transactions.account = Users.account
GROUP BY Users.account
HAVING SUM(Transactions.amount) > 10000
