const Product = require("../model/productModule")


exports.createProduct = async (res,req)=>{

    const product = await Product.create(req.body);
    res.status(201)

}

exports.getAllProducts = (req,res)=>{
    res.status(200).json({
        message:"route is working fine "
    })
}