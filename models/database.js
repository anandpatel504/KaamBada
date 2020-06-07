const env = require('dotenv').config()
console.log(process.env.host);

var knex = require('knex')({
    client: "mysql",
    connection: {
        host : process.env.host,
        user : process.env.user,
        password : process.env.password,
        database : process.env.database
    }
})
// Create student_register table
    knex.schema.createTable('users', function(table){
        table.increments('id').primary();
        table.string('name');
        table.string('email');
        table.bigInteger('mobile');
        table.string("profession");
        table.string("gender");
        table.integer("age");
        table.string("state");

     }).then(() => {
        console.log({"Wooh..": "users table created successfully!"});
     }).catch(() => {
        console.log("users table is already exists!");
    });
    
module.exports = knex;