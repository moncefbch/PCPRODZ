import express from "express";
import data from "../data.js";
import Product from "../models/productmodel.js";
import expressAsyncHandler from "express-async-handler";

const productRouter = express.Router();

productRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const name = req.query.name || "";
    const category = req.query.category || "";
    const nameFilter = name ? {name: {$regex: name, $options: "i"}} : {};
    const categoryFilter = category ? {category} : {};
    const product = await Product.find({
      ...nameFilter,
      ...categoryFilter,
    });
    res.send(product);
  })
);
productRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({createdProducts});
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
    const {search} = req.query;
    const product = await Product.find({});
    let sortedProducts = [...product];

    if (search) {
      sortedProducts = sortedProducts.filter((product) => {
        return product._name.startsWith(search);
      });
    }
    if (sortedProducts.length < 1) {
      // res.status(200).send('no products matched your search');
      return res.status(200).send({sucess: true, data: []});
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
      res.status(404).send({message: "Product Not Found"});
    }
  })
);

productRouter.get(
  "/search?:text",
  expressAsyncHandler(async (req, res) => {
    //creatr a const text equals to the text in the url
    const {name} = req.query;
    const {category} = req.query;
    const product = await Product.find({});
    let sortedProducts = [...product];
    //res.send({query, name});
    if (name) {
      sortedProducts = sortedProducts.filter((product) => {
        //return product that his name contains text no matter if its upper or lower
        return (
          product._name.toLowerCase().includes(name.toLowerCase()) ||
          product._name.toLowerCase().includes(name.toLowerCase()) ||
          product.brand.toLowerCase().includes(name.toLowerCase())
          //product.processeur.toLowerCase().includes(text.toLowerCase()) ||
          //product.ram.toLowerCase().includes(text.toLowerCase()) ||
          //product.disque.toLowerCase().includes(text.toLowerCase()) ||
          //product.gpu.toLowerCase().includes(text.toLowerCase()) ||
          //product.category.toLowerCase().includes(text.toLowerCase())
        );
      });
    }
    if (category) {
      sortedProducts = sortedProducts.filter((product) => {
        return product.category
          .toLowerCase()
          .includes(category.toLocaleLowerCase());
      });
    }
    if (sortedProducts.length < 1) {
      // res.status(200).send('no products matched your search');
      return res.status(404).send({message: "no products matched your search"});
    }
    res.send(sortedProducts);
  })
);

productRouter.get(
  //get the most recent products
  "/recent",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.find({});
    let sortedProducts = [...product];
    sortedProducts = sortedProducts.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });
    //limit the number of products to 10
    sortedProducts = sortedProducts.slice(0, 10);
    if (sortedProducts.length < 1) {
      // res.status(200).send('no products matched your search');
      return res.status(200).send({});
    }
    res.send(sortedProducts);
  })
);

/* poductRouter.post(
// get the most expensive products
  "/expensive",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.find({});
    let sortedProducts = [...product];
    sortedProducts = sortedProducts.sort((a, b) => {
      return b.price - a.price;
    }


);*/

export default productRouter;
