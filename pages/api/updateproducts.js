// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from "../../middleware/db_config"
import Product from "../../models/Product"

const  handler = async (req, res) => {
    if(req.method == "POST"){
        // console.log(req.body);
        for (let i=0; i<req.body.length; i++){
            console.log(req.body)
            let p = await Product.findByIdAndUpdate(req.body[i]._id, req.body[i])
        }
        res.status(201).json({ success: "Product Updated" })
    }
    else{
        res.status(400).json({ error: "Invalid Request" })
    }
}

export default connectDb(handler)  