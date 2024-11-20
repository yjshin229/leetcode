# Write your MySQL query statement below
SELECT a.name as Employee
FROM Employee As a, Employee AS b
WHERE a.managerId = b.Id and a.Salary > b.Salary

