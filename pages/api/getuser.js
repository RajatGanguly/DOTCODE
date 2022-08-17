// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const url = require('url');
import conn from "../../middleware/db_config"

const  handler = async (req, res) => {
    // console.log("http://"+req.rawHeaders[1]+req.url)
    const current_url = new URL("http://"+req.rawHeaders[1]+req.url)
    const search_params = current_url.searchParams;
    var sql = `SELECT * FROM ${'users'} WHERE 1`
    const u_id = search_params.get('u_id');
    if(u_id!=''){
        sql += ` AND ${'id'}='${u_id}'`;
    }
    try{
        conn.query(sql, function(err, result){
            // console.log(sql)
            if(err){
                throw err;
            } 
            else{
                res.status(200).json({ result })
                // console.log(result)
            }
        })
    }
    catch(e){
        res.status(404).json({ "error": "Some Internal Server Error" })
    }
    // if(category != ""){
    //     var products = await Product.find({"category" :category })
    // }
    // else{
    //     var products = await Product.find()
    
    // let products = await Product.find()
    
}
export default handler