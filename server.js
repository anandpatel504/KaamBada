const express = require("express");
const app = express();
const bodyParser = require('body-parser')
app.use(express.json());
const Swal = require('sweetalert');
const path = require("path");

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(__dirname))

let knex = require("./models/database")
// console.log('database', knex);

// Redirect main_page;
app.get("/", (req, res) => {
	res.redirect("/main_page");
});

// Get main page
app.get("/main_page", (req, res) => {
    res.sendFile(__dirname + '/style/index.html');
    console.log('main page is open :)');
});

// route to student_register.js
let register = express.Router();
app.use("/", register);
require("./Routes/register")(register, Swal, path, knex);

// the port listener
const server = app.listen(3050, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log({"Wooh..": "Thanks! Anand for running backend part."})
    console.log("Your server is running on  port....")
    console.log(host, port);
})