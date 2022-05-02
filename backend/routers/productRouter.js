import express from "express";
import data from "../data.js";
import Product from "../models/productmodel.js";
import expressAsyncHandler from "express-async-handler";

const productRouter = express.Router();

productRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.find({});
    res.send(product);
  })
);
productRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
  })
);
//suggestions for the search box
productRouter.get(
  "/suggestions",
  expressAsyncHandler(async (req, res) => {
    const suggestions = await Product.find().distinct("_name");
    res.send(suggestions);
  })
);
productRouter.get(
  "/categories",
  expressAsyncHandler(async (req, res) => {
    const categories = await Product.find().distinct("category");
    res.send(categories);
  })
);

//mouayed : this api is broken and not used
productRouter.get(
  "/query",
  expressAsyncHandler(async (req, res) => {
    const { search } = req.query;
    const product = await Product.find({});
    let sortedProducts = [...product];

    if (search) {
      sortedProducts = sortedProducts.filter((product) => {
        return product._name.startsWith(search);
      });
    }
    if (sortedProducts.length < 1) {
      // res.status(200).send('no products matched your search');
      return res.status(200).send({ sucess: true, data: [] });
    }
    res.send(sortedProducts);
  })
);

productRouter.get(
  "/get:id",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

productRouter.get(
  "/search?:text",
  expressAsyncHandler(async (req, res) => {
    //creatr a const text equals to the text in the url
    const { text } = req.query;
    const product = await Product.find({});
    let sortedProducts = [...product];
    if (text) {
      sortedProducts = sortedProducts.filter((product) => {
        //return product that his name contains text no matter if its upper or lower
        return (
          product._name.toLowerCase().includes(text.toLowerCase()) ||
          product._name.toLowerCase().includes(text.toLowerCase()) ||
          product.brand.toLowerCase().includes(text.toLowerCase()) ||
          product.processeur.toLowerCase().includes(text.toLowerCase()) ||
          product.ram.toLowerCase().includes(text.toLowerCase()) ||
          product.disque.toLowerCase().includes(text.toLowerCase()) ||
          product.gpu.toLowerCase().includes(text.toLowerCase()) ||
          product.category.toLowerCase().includes(text.toLowerCase())
        );
      });
    }
    if (sortedProducts.length < 1) {
      // res.status(200).send('no products matched your search');
      return res.status(200).send({});
    }
    res.send(sortedProducts);
  })
);

//this is a post request to add a new product (working)
productRouter.post(
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
productRouter.delete(
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

export default productRouter;
