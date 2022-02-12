# emge-software-developer-task

### Introduction
The project is a solution to emge softwares developer task which involves building an expense tracker with user authentication

### Project Features
* User authentication
* Create, Read, Update and Delete expenses

### Installation Guide
* Clone this repository [here](https://github.com/alahirajeffrey/emge-software-developer-task.git).
* Run npm install to install all dependencies. Ensure you have node and npm installed.
*  Ensure you have mongodb installed and running locally on your computer or you could use atlas
* Create an .env file in your project root folder and add your variables. Ensure you add your database connection string. See .env.sample for assistance.

### Usage
* Run npm start to start the application.
* Connect to the API using Postman on port 8080.        

### API Endpoints
| HTTP Verbs | Endpoints | Action | Required |
| --- | --- | --- | --- |
| POST | /user/register | register a user |  req.body.username, req.body.password, req.body.email |
| GET | /user/login | login | req.body.username, req.body.password, req.body.email |
| POST | /expense/add | add expense | req.body.username, req.body.expenseTitle, req.body.amount, req.body.expenseType |
| DELETE | /expense/delete | delete expense | req.body.username, req.body.expenseTitle, req.body.amount, req.body.expenseType |
| PUT | /expense/put | update expense | req.body.username, req.body.expenseTitle, req.body.amount, req.body.expenseType |

### Technologies Used
* [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
* [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
* [MongoDB](https://www.mongodb.com/) This is a free open source NOSQL document database with scalability and flexibility. Data are stored in flexible JSON-like documents.
* [Mongoose ODM](https://mongoosejs.com/) This makes it easy to write MongoDB validation by providing a straight-forward, schema-based solution to model to application data.

### Author(s)
* [Alahira Jeffrey](https://github.com/alahirajeffrey)

### License
This project is available for use under the MIT License.
