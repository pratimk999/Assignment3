const express = require("express");
const morgan = require('morgan');

const routes = require('./router/index.js'); //NOTE: Importing the accounts route as a module

const app = express(); //NOTE: Running the imported express function to instantiate it
const PORT = 3000;

// Middleware
app.use(express.json()); //NOTE: middleware to handle JSON objects, this parses incoming request body objects into JSON automatically for us
app.use(morgan('dev')); //NOTE: middleware to log the API call, it's method, route, time it took, response size & response code
app.set('view engine', 'ejs'); //NOTE: to tell express to read & understand ejs files, fill the values and run the operations in those *.ejs files and then send them as completed HTML to browser

app.use('/api', routes); //NOTE: registering every routes available in accountsRoutes as /api/[every-other-routes]

app.use('*', (req, res) => { //NOTE: if no routes match the route that is being called, gracefully handle the not found route
    res.status(404).send('NOT ALLOWED');
});

app.listen(PORT, () => //NOTE: runs the server on port: 3000
  console.log(`Express server currently running on port ${PORT}`)
);
