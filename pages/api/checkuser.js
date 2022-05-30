// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import conn from "../../middleware/db_config";
const bcrypt = require('bcryptjs');
const JWT_SECRET_KEY = "cgfVGVGVGSS";
const jwt = require('jsonwebtoken');

const  handler = async (req, res) => {
    if (req.method == "POST"){
        const user_body = JSON.parse(req.body)

        var sql = `SELECT * FROM ${'users'} WHERE ${'email'} = '${user_body.email}'`;
        conn.query(sql, async function(err, result){
            if(err){
                res.status(404).json({ "error": "Some Internal Server Error" })
                throw err;
            } 
            else{
                const checkPass = await bcrypt.compare(user_body.password, result[0].password)
                if(!checkPass){
                    console.log("Pass wrong")
                    res.status(400).json({ error: "Invalid credentials" })
                }
                else{
                    console.log("Pass ok")
                    const data = {
                        user: {
                            id: result[0].id
                        }
                    }
                    const authToken = jwt.sign(data, JWT_SECRET_KEY)
                    // console.log(typeof(authToken))
                    
                    // res.status(200).json({ authToken })
                    res.status(200).json({ authToken })
                }
            }
        })
    }
    else{
        res.status(404).send("page not found 404")
    }
}
export default handler