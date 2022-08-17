// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const url = require('url');
import conn from "../../middleware/db_config"

const  handler = async (req, res) => {
    // console.log("http://"+req.rawHeaders[1]+req.url)
    const current_url = new URL("http://"+req.rawHeaders[1]+req.url)
    const search_params = current_url.searchParams;
    var sql = `SELECT * FROM ${'lessons'} WHERE 1`
    const course = search_params.get('c_name');
    // console.log(search_params)
    if(course!=''){
        sql += ` AND ${'c_name'}='${course}'`;
    }
    // console.log(category)
    conn.query(sql, function(err, result){
        // console.log(sql)
        if(err){
            res.status(404).json({ "error": "Some Internal Server Error" })
            throw err;
        } 
        else{
            res.status(200).json({ result })
            // console.log(result)
        }
    })
    
}
export default handler