// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import conn from "../../middleware/db_config"

const  handler = async (req, res) => {
    // console.log("http://"+req.rawHeaders[1]+req.url)
    // const current_url = new URL("http://"+req.rawHeaders[1]+req.url)
    // const search_params = current_url.searchParams;
    return new Promise( resolve => {
    var sql = `SELECT * FROM ${'contact'} ORDER BY ${'time'} DESC`
    // console.log(search_params)
    // console.log(category)
    try {
    conn.query(sql, function(err, result){
        // console.log(sql)
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
    // if(category != ""){
    //     var products = await Product.find({"category" :category })
    // }
    // else{
    //     var products = await Product.find()
    
    // let products = await Product.find()
})
}
export default handler