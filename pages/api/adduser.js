// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const url = require('url');
const env = require('dotenv').config();
import conn from "../../middleware/db_config";
const bcrypt = require('bcryptjs');
const JWT_SECRET_KEY = "cgfVGVGVGSS";
const jwt = require('jsonwebtoken');

const  handler = async (req, res) => {
    if (req.method == "POST"){
        // console.log(req.body)
        const {name, email, password, college} = JSON.parse(req.body)
        
        const salt = await bcrypt.genSalt(10)
        // console.log(user_body, salt)
        // const password = req.body.password;
        console.log(name, email, password, college);
        if (password != undefined) {
            var secPassword = await bcrypt.hash(password, salt);
        }
        // console.log("After lodu hashing" + user_body, salt, secPassword)

        var sql = `INSERT INTO ${'users'} (${'name'}, ${'email'}, ${'password'}, ${'college'}) VALUES ('${name}','${email}','${secPassword}','${college}')`
        console.log(sql)
        conn.query(sql, function(err, result){
            if(err){
                res.status(500).json({ "error": "Some Internal Server Error" })
                throw err;
            } 
            else{
                res.status(200).json({ result })
                
            }
        })
    }
    else{
        res.status(404).send("page not found 404")
    }
}
export default handler