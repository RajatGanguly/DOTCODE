// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from "../../middleware/db_config"
import Product from "../../models/Product"

const  handler = async (req, res) => {
    if(req.method == "POST"){
        // console.log(req.body);
        for (let i=0; i<req.body.length; i++){
            console.log(req.body)
            let p = new Product({
                title: req.body[i].title,
                slug: req.body[i].slug,
                desc: req.body[i].desc,
                img: req.body[i].img,
                category: req.body[i].category,
                size: req.body[i].size,
                color: req.body[i].color,
                price: req.body[i].price,
                availableQuantity: req.body[i].availableQuantity
            })
            await p.save()
        }
        res.status(201).json({ success: "Product Listed" })
    }
    else{
        res.status(400).json({ error: "Invalid Request" })
    }
}

export default connectDb(handler)  