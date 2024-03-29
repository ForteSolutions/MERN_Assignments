const Product = require("../models/product.model.js");

module.exports =  {

    createProduct: (req, res)=>{
        Product.create(req.body)
            .then((newProduct)=>{
                console.log(newProduct)
                res.json(newProduct)
            })
            .catch((err) => console.log(err));
    },

    getAllProducts: (req, res)=>{
        Product.find({})
            .then((allProducts)=>{
                console.log(allProducts);
                res.json(allProducts);
            })
            .catch((err) => console.log(err));
    },

    getOneProduct: (req, res)=>{
        Product.findOne({_id: req.params.id})
            .then((oneProduct)=>{
                console.log(oneProduct);
                res.json(oneProduct);
            })
            .catch((err) => console.log(err));
    }
}