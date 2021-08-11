![](emapp.gif)
# Employee Management App [![Netlify Status](https://api.netlify.com/api/v1/badges/347e2170-956c-44ef-bbcf-e8089529b03b/deploy-status)](https://app.netlify.com/sites/emapp/deploys)
## Demo
Here is a working live demo: https://emapp.netlify.app/ 
* <i>not intended for mobile</i> 
### Overview
The Employee Management App is a full stack web application created for learning purposes. It serves as an organizational system for managers or HR personel to keep track of Employee data and upcoming tasks within a company.

## Client
### React JS
  * <i>Node / Express js</i>
  * <i>React Redux</i>
  * <i>Antd Components (side nav)</i>
  * <i>Custom CSS (Main page)</i>
#### * Landing Page
The main page dashboard gives real-time updates on upcoming and past due tasks. Access specific tasks through the calendar, or navigate to a certain team through the list on the right.
#### * Side Nav
The side bar navigation displays the full list of sorted items by category.
#### * Add Employee/Team/Task
From the side nav, add new Employees or Teams. Each are directly pushed to the database and added to their respective redux state.
#### * Team Page
Teams are the top level objects in the database. The team page displays every employee and task relation. It also has options to remove employees, or delete the team completely, erasing them from the database.
#### * Employee / Task Cards
These cards display all the data relating to a specific entity.

## Server
### Spring Boot Java
  * JPA / Hibernate
  * HATEOS
#### * Rest API
Converts entities to representation models when called. Adds hypertext links pointing to all other related entities.
<img src=./emappjson.png />

## Database
### Postgres
<img src=./emappdb.png />
