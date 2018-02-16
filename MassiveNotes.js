/*  MASSIVE  */

//To install PostgreSQL
    //Mac: http://postgresapp.com/

// psql - connect to postgres in the terminal
// CREATE DATABASE [database]; - create database
// \c [database] - connect to database
// \q - disconnect from postgres

/* QUEARY PARAMETERS */
//Takes everything after the question mark on a url and places it on req.query.
//req.params takes the data that is in the url before the question mark.

//For handling query parameters, we use the same endpoints as if there were no queries
app.get('/api/species', function(req, res, next) {
    req.query.group
});
//Express will put all the queries from the client request onto a query object on the req object.
