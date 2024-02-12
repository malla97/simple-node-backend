# simple-node-backend

A very simple node & express backend that listens to basic CRUD-operations: GET, POST, PUT, and DELETE.


Install dependencies: npm install.
Run the program: node .
Listens: http://localhost:8080

GET all the countries: http://localhost:8080/countries
GET a country by ID: http://localhost:8080/countries/{id}

POST (add) a new country: http://localhost:8080/countries with a request body. Example request body: {"name": "Spain", "flag": "🇪🇸", "isNordic": false}

PUT (update) country by ID: http://localhost:8080/countries/{id} with a request body that contains the field(s) that you want to update.
For example {"isNordic": false}

DELETE a country by ID: http://localhost:8080/countries/{id}


I used Postman to test the operations. The program contains an array with data of three countries.

To improve this I could use a database instead of an array, make swagger documentation, add a frontend.
PATCH operation also might have been a more correct choice instead of PUT.
As this was just a small practice run, most likely I might use this as a template in the future.
