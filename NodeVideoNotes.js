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



