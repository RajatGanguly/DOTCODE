const mysql = require("mysql")
// const env = require("util/config");
const conn = mysql.createConnection({
    // host: env.URL,
    // user: env.USERNAME,
    // password: env.PASSWORD,
    // database: env.DATABASENAME
    // host: "sql685.main-hosting.eu",
    // user: "u375222219_dotcode",
    // password: "ILoveWebsites69@",
    // database: "u375222219_dotcode"
    host: "localhost",
    user: "root",
    password: "",
    database: "dot_code"
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