const mysql = require("mysql")
// const env = require('dotenv').config()
const conn = mysql.createConnection({
    // host: env.URLDC,
    // user: env.USERNAMEDC,
    // password: env.PASSWORDDC,
    // database: env.DATABASENAMEDC
    host: process.env.NEXT_PUBLIC_URL,
    user: process.env.NEXT_PUBLIC_USERNAME,
    password: process.env.NEXT_PUBLIC_PASSWORD,
    database: process.env.NEXT_PUBLIC_DATABASENAME
    // host: "localhost",
    // user: "root",
    // password: "",
    // database: "dot_code"
})

conn.connect(function(err){
    if(err) throw err;
    // else console.log("Connection successful")
})

export default conn












// import mongoose from "mongoose";

// const connectDb = handler => async (req,res) =>{
//     if(mongoose.connections[0].readyState){
//         return handler(req, res)
//     }
//     // console.log(process.env)
//     await mongoose.connect("mongodb://localhost:27017/ecom?&readPreference=primary&appname=MongoDB%20Compass&ssl=false")
//     return handler(req, res)
// }

// export default connectDb