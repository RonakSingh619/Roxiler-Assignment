import mysql from 'mysql'


// MySql Database Setup
export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "roxilerproject",
    port: "3306"
})
