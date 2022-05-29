// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const url = require('url');
import conn from "../../middleware/db_config"

const  handler = async (req, res) => {
    if (req.method == "POST"){
        const doubt_body = JSON.parse(req.body)
        var sql = `INSERT INTO ${'doubts'} (${'doubt'}, ${'user_id'}, ${'lesson_id'}) VALUES ('${doubt_body.doubt}','${doubt_body.lesson_id}','${doubt_body.user_id}')`
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