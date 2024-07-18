# API-simulator app
This is a Node.js + Express server used for testing front end clients. Specifically React but it can be used with any front-end client application, including smartphone apps.

Install two dependencies: `npm install express cors`

### Endpoints
You can make HTTP requests from a client to the following endpoints:

Replace the route parameter `:id` with value 1,2,3, or 4.

Todos:
- GET http://localhost:4000/api/todos
- GET http://localhost:4000/api/todos/:id
- POST http://localhost:4000/api/todos/create
- PUT http://localhost:4000/api/todos/:id/update
- DELETE http://localhost:4000/api/todos/:id/delete

Articles:
- GET http://localhost:4000/api/articles
- GET http://localhost:4000/api/articles/:id
- POST http://localhost:4000/api/articles/create
- PUT http://localhost:4000/api/articles/:id/update
- DELETE http://localhost:4000/api/articles/:id/delete

Products:
- GET http://localhost:4000/api/products
- GET http://localhost:4000/api/products/:id
- POST http://localhost:4000/api/products/create
- PUT http://localhost:4000/api/products/:id/update
- DELETE http://localhost:4000/api/products/:id/delete

Posts:
- GET http://localhost:4000/api/posts
- GET http://localhost:4000/api/posts/:id
- POST http://localhost:4000/api/posts/create
- PUT http://localhost:4000/api/posts/:id/update
- DELETE http://localhost:4000/api/posts/:id/delete

### Start the server
Start the server with `npm start`

Or if you have nodemon installed globally and want to use hot reloading: `npm run dev`

### Access the API endpoints directly in the browser
To view the todo list in the browser go to: http://localhost:4000/api/todos

or http://localhost:4000/api/todos/:id replacing :id with a number 1 through 4.

### To access the API endpoints with cURL:
CURL is an command line utility that lets you make HTTP requests to URLs.
To see if you have it installed, from the Terminal, in any directory enter: `which curl`
If it returns a path to the curl app then it is installed.
If it returns "curl not found" then it is not installed.

The below examples are curl HTTP requests made to the todos collection. Change todos to articles, products, or posts to access those collections.

Get Todos: `curl http://localhost:4000/api/todos`
Get Todo: `curl http://localhost:4000/api/todos/3`
Get invalid todo: `curl http://localhost:4000/api/todos/2394u25389u4`

Post new Todo: 
Default header is: -H "Content-Type: application/x-www-form-urlencoded"
`curl -X POST http://localhost:4000/api/todos/create -d "task=Learn APIs&completed=false"`

Update Todo: 
Default header is: -H "Content-Type: application/x-www-form-urlencoded"
`curl -X PUT http://localhost:4000/api/todos/5/update -d "task=Learn Express&completed=true"`

Delete Todo:
`curl -X DELETE http://localhost:4000/api/todos/5/delete`

## Start over
To start with the initial Todo list, delete the todos.json file, then restart the server.

You can make changes to the initial Todo list in the routes.js file.

## Simulate errors and delays
At the top of the routes.js file are variables serverError, delay, and validate all set to false by default.
- To return a server error status code 500 change serverError to true.
- To add validation change validate to true. This checks that every form field has a value. If not it returns a validation error status code 400 and a message saying the field is required. This affects POST and PUT requests only.  
- To add a 1 second delay to each response change delay to true.