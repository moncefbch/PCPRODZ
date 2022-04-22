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
productRouter.get(
  "/categories",
  expressAsyncHandler(async (req, res) => {
    const categories = await Product.find().distinct("category");
    res.send(categories);
  })
);
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
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: "Product Not Found" });
    }
  })
);

//productRouter.post search api that accepts one parameter text and returns all products that one of their attribtes matches the text
productRouter.post(
  "/search",
  expressAsyncHandler(async (req, res) => {
    const { text } = req.body;
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
      return res.status(200).send({ sucess: true, data: [] });
    }
    res.send(sortedProducts);
  })
);

export default productRouter;
