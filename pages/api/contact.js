// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import conn from "../../middleware/db_config";

export default function handler (req, res) {
    return new Promise (resolve =>{
    if (req.method == "POST"){
        const {email, message} = JSON.parse(req.body)
        
        var sql = `INSERT INTO ${'contact'} (${'email'}, ${'message'}) VALUES ('${email}','${message}')`
        // var sql = `SELECT * FROM ${'users'}`
        console.log(sql)
        try {
        conn.query(sql, function(err, result){
            if(err){
                // res.status(500).json({ "error": "Some Internal Server Error" })
                throw err;
            } 
            else{
                res.status(200).json({ result })
                return resolve();
            }
        })
    } catch (e) {
        res.status(500).json({ "error": "Some Internal Server Error" })
        res.end();
        return resolve();
    }
    }
    else{
        res.status(404).send("page not found 404")
    }
})
}