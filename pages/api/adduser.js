// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const url = require('url');
const env = require('env');
import conn from "../../middleware/db_config";
const bcrypt = require('bcryptjs');
const JWT_SECRET_KEY = "cgfVGVGVGSS";
const jwt = require('jsonwebtoken');

const  handler = async (req, res) => {
    if (req.method == "POST"){
        const user_body = JSON.parse(req.body)
        console.log(user_body)

        const salt = await bcrypt.genSalt(10)
        const secPassword = await bcrypt.hash(user_body.password, salt);

        var sql = `INSERT INTO ${'users'} (${'name'}, ${'email'}, ${'password'}, ${'college'}) VALUES ('${user_body.name}','${user_body.email}','${secPassword}','${user_body.college}')`
        console.log(sql)
        conn.query(sql, function(err, result){
            if(err){
                res.status(404).json({ "error": "Some Internal Server Error" })
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