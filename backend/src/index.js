const express = require('express');

const app = express();

const PORT=5000;

app.use(express.json());

const userRoutes = require('./routes/users');

app.use('/users', userRoutes);


app.get("/", (req,res) => {
  res.send("Welcome to our backend")  
});


// TODO
// 1. Create user route here
// 2. Create Folder/Directory for routes and name routes-> must be in src/routes/
// 3. Create Folder inside src -> controllers
// 4. create Folder inside src -> db
// 5. Create File inside routes -> users.js
// 6. Create File inside Controller -> users.js
// 7. create File  inside db -> users.js


/*
--- controller/user
1. a function called register-> parameters(Fistname, Lastname, faculty, date_of_birth, occupation, email, password)
2. Console.log(parameters)
*/

/*
--- routes/users.js
1. import express
2. create express routes (/register, callback function-> parameters(req, res))
3. console log (user is created)
*/


/*
--- index.js
1. use the module ("/user", routes/users.js)

*/

app.listen(PORT, () => {
console.log(`Server is listening to the PORT ${PORT}`);
});