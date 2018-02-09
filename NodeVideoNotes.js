/* NODE */

/* NPM */
// Installs code packages shared by others
// A tool used from the command line
// Automatically installs dependencies of packages we install

/* npm install [package]*/
// install the node package pf the name into the current folder

/* npm install --save [package] */
// installs the node package and adds the packege to the package.json dependencies

/* npm install -g [package] */
// installs the node package of the name into the computer's root folder, available across the device

/* npm install */
// looks in the package.json for everything saved under the dependencies, then installs those packages


/* Package.json */
// a file that racks basic information about a project, including dependencies and versions. Created using npm init in the command line.


/* YARN */
// Yarn is made by Facebook
// Includes NPM and Bower, both are package repos to get libraries

/* yarn install */
// yarn will look at the package.json and install all the dependencies.

/* yarn add [package] */
// yarn will install the package and add the dependency to the package.json. This is the same as npm install --save.

/* npm install -g yarn */
// install yarn globally, to be used everywhere.


/* Basic Node */
// Node: an application that runs on our computer, and uses the same runtime as Chrome to run JavaScript
// Node is less than a server
// A JavaScript engine that we can run outside of a browser

/* We Will Use Node For */
// Development tools on the computer
// Making our own web servers

 /* Node Can Also Be Used For */
// Home Automation (Tessel.io)
// File editing and manipulation
// Background processes (listeners, recurring tasks)
// And a while bunch more


/* NODEMON */
// nodemon: a development tool that runs in the terminal to watch fopr changes in the code and run the script again
// npm install -g nodemon
// Once done installing, just type 'nodemon' in the command line


/* MODULES and NODE */
// To Import: var name = require('fileName');
// To Export: module.exports = [function, object, or variable]; 
        //OR: module.exports.basic = function(name) { return 'Well, hi ' + name + '!'; }
// ES6 import/export does not work in Node.

// require: allows us to import code from other files
// module.exports: Node allows us to easily export a single piece of code (an object, function, etc.)

/* EXAMPLES */
//greetings.js
    var greetings = {
        formal: "It's a pleasure to meet you",
        timeOfDay: function(time) {
            return 'Good' + time;
        }
    };

    modeule.exports = greetings;

//script.js
    var greetings = require('./greetings');

    greetings; //{ formal: "It's a pleasure to meet you", timeOfDay: [function] }



//makeUser.js
    var USer = function(name, age) {
        this.name = name;
        this.age = age;
    }

    module.exports = User;

//script.js
    var USer = require('./makeUser');

    var sheila = new USer('Sheila', 26);

    sheila; //{ name: "Sheila", age: 26 }



/* STATIC FILES */
    var app = express();

    app.use( express.static('public') ); //DO NOT express.static() YOUR PROJECT FOLDER!! 

    app.use(express.static(
        path.join(_dirname, 'public')
    ));

/* How does our app know whether to get a file from public or the server? */
// That is what we specified in the express.static path.
// If you want to do an endpoint that's sending information, you seperate with a /api infront of that endpoint like: app.get('/api/about')


/* SIMPLE SERVER */
// 1. Install express:                                                  npm install --save express
// 2. Require the express module:                                       var express = require('express);
// 3. Invoke express to create an app which can ask to listen:          var app = express();
// 4. app.listen() tells the server to listen for requests on a port:   app.listen(3000, function() {
//                 The second parameter is a callback function              console.log("I'm listening!");
//                 which will run as soon as the server is listening    }); 



/* TOP-LEVEL MIDDLEWARE */
// app.use: an Express method which runs the passed in function on every request that comes in your server
// bodyParser.json(); will parse the body of the request and make it easily accessible as req.body to the next functions
// req.body: the parsed copy of the request body - contains the data sent by the client
    app.use( function(req, res, next) {
        next();
    })

    app.get('/api/users', function(reg, red, next) {
        res.send(users);
    })

/* Body-Parser */
// npm install --save body-parser
    var bodyParser = require('body-parser');

    app.use(bodyParser.json()) // puts body on req.body so that our other endpoints can call req.body inside of our app to get the body out

    app.post('api/messages', function(req, res, next) {
        req.body
    })


/* URL PARAMETERS */
// http://facetweet.com
    var users = [{
        id: 254,
        name: 'Holly'
    },
    {
        id: 201,
        name: 'Bud'
    },
    {
        id: 382,
        name: 'Joann'
    }]

    app.get('/api/users', function( req, res, next ) {  //this gets back all the users because it wasn't specified of which user to get
        res.send(users);
    })

    app.get('/api/users/:userId', function( req, res, next ) { //this gets back a specific user because of the :userId in the url
        for (var i = 0; i < users.length; i++) {
            if( users[i].id === req.params.userId ) {
                return res.status(200).send(users[i]);
            }
        }
    })
// Indicate url parameters with a colon. The client can send any value in this place.
// Express creates a params object on the req object with corresponding values for each URL paramter



/* RES.SEND, .JSON, .END, .REDIRECT */
// res.send(): Sends the response with the data passed in as the request body. Converts objects to JSON
// res.json(): Just like res.send, but converts non-objects to JSON as well
// res.end(): Closes the response
// res.redirect(): Redirects the URL of the client to the url passed in. Could be a local URL or another web site.

