const ProductController = require("../controllers/product.controller");

module.exports = (app)=>{
    app.post("/api/products", ProductController.createProduct);
    app.get("/api/products", ProductController.getAllProducts);
    app.get("/api/products/:id", ProductController.getOneProduct);
}