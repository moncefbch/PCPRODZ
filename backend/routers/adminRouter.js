import express from "express";
import Product from "../models/productmodel.js";
import expressAsyncHandler from "express-async-handler";
//import adminAuth from "../middlewares/adminAuth.js";



const adminRouter = express.Router();
// import the admin auth middleware 
//adminRouter.use(adminAuth);
adminRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.find({});
    res.send(product);
  })
);

//this is a post request to add a new product (working)
adminRouter.post(
  "/add",
  expressAsyncHandler(async (req, res) => {
    const product = new Product(req.body);
    const createdProduct = await product.save();
    res.send(createdProduct);
  })
);
/* this is the json format of the post request 
  {
          "_name": "Macbook Pro",
          "brand": "Golden Apple",
          "processeur": "Intel Core i7",
          "ram": "1666GB",
          "disque": "512222GB",
          "gpu": "Intel Iris Plus Graphics 640",
          "price": 9999,
          "image": "/images/product2.png",
          "category": "laptop",
          "countInStock": 8,
          "rating": 4
  }
*/

//delete a product with its id
adminRouter.delete(
  "/delete:id",
  expressAsyncHandler(async (req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (deletedProduct) {
      res.send(deletedProduct);
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

export default adminRouter;
