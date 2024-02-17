## 13 E-commerce Back-End: Object-Relational Mapping    

* [Github Repository](https://github.com/KrispyKhang/SQL-Employee-Tracker)

## Task
The challenge is to build the back end for an e-commerce site. You’ll take a working Express.js API and configure it to use Sequelize to interact with a MySQL database.The

## User Story

```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```


## Summary
* Express, Sequelize, MySql, & DotENV were packages installed.
* Server.Js is build that connects to our "Routes" folder and builds a PORT 3001 using express when we start our server
* We have a connection.js folder that connects with our DotENV where we can import secret login database when we run the seed. Sequelize is also connected so we don't have to manually start SQL like the previous lessons working with Workbench.
* We have a DB Folder with our Schema name for our database when we run it.
* In our Models folder (part of MVC) - We are able to structure our databases for each type.
* The index file in our Models Folder imports the models - The purpose is to create associations between models. ie: "Product belongs to Category." In which 

![](./Image%20Assets/Feb-16-2024%2015-04-06.gif)

## Ta-Da
* We've created a database that is easy to use for non-developers to manage Company empployee database!