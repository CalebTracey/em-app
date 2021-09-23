
# Employee Management App 
![](emapp.gif)
## Demo
Here is a working live demo: https://emapp.netlify.app/ 
* <i>not intended for mobile</i> 
## Overview
The Employee Management App is a full stack web application developed using React JS + Spring Boot + PostgreSQL. It serves as an organizational system for managers or HR personel to keep track of Employee data and upcoming tasks within a company.

The live demo operates using randomly generated data stored on a Heroku PostgreSQL server. I update the data once a month, so please keep that in mind if due dates or upcoming tasks seem imbalanced. 

## Client 
[Code](https://github.com/CalebTracey/EmployeeManagementApp/tree/main/frontend)
### React JS
  * <i>Node / Express js</i>
  * <i>React Redux</i>
  * <i>Axios</i>
  * <i>Antd Components (side nav)</i>
  * <i>Custom CSS (main page)</i>
### Landing Page
The main page dashboard gives real-time updates on upcoming and past due tasks. Access specific tasks through the calendar, or navigate to a certain team through the list on the right.

### Side Nav
The side bar navigation displays the full list of sorted items by category.

### Add Employee/Team/Task
From the side nav, add new Employees or Teams. Each are directly pushed to the database and added to their respective redux state.

### Team Page
Teams are the top level objects in the database. The team page displays every employee and task relation. It also has options to remove employees, or delete the team completely, erasing them from the database.

### Employee / Task Cards
These cards display all the data relating to a specific entity.

## Server 
[Code](https://github.com/CalebTracey/EmployeeManagementApp/tree/main/src/main/java/com/dashboard/backend)
### Spring Boot Java
  * JPA / Hibernate
  * HATEOS
### Rest API
#### Employee JSON object.

<img src=./emappjson.png />

## Database
### Postgres
#### Entity Relationship Diagram
<img src=./emappdb.png />

#### CREATE TABLE SQL for employee table
<img src=./employee-table.png />
