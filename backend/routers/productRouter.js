import express from "express";
import data from "../data.js";
import Product from "../models/productmodel.js";
import expressAsyncHandler from "express-async-handler";
import {isAdmin, isAuth} from "../utils.js";

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
    const {order} = req.query;
    if (order === "newest") {
      sortedProducts = sortedProducts.sort((a, b) => {
        return b.createdAt - a.createdAt;
      });
    }
    if (order === "lowest") {
      sortedProducts = sortedProducts.sort((a, b) => {
        return a.price - b.price;
      });
    }
    if (order === "highest") {
      sortedProducts = sortedProducts.sort((a, b) => {
        return b.price - a.price;
      });
    }

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

//delete product
productRouter.delete(
  "/delete/:id",
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      await product.remove();
      res.send({message: "Product Deleted"});
    } else {
      res.status(404).send({message: "Product Not Found"});
    }
  })
);

//edit product
productRouter.post(
  "/edit",
  expressAsyncHandler(async (req, res) => {
    const {id, name, price, category, brand, description, image} = req.body;
    const product = await Product.findById(id);
    if (product) {
      product._name = name;
      product.price = price;
      product.category = category;
      product.brand = brand;
      product.description = description;
      product.image = image;
      await product.save();
      res.send({message: "Product Updated"});
    } else {
      res.status(404).send({message: "Product Not Found"});
    }
  })
);
productRouter.put(
  "/:id",
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product) {
      // product.name = req.body.name;
      // product.price = req.body.price;
      // product.image = req.body.image;
      // product.category = req.body.category;
      // product.brand = req.body.brand;
      // product.countInStock = req.body.countInStock;
      // product.description = req.body.description;
      product._name = req.body.name;
      product.brand = req.body.brand;
      product.processeur = req.body.cpu;
      product.ram = req.body.ram;
      product.disque = req.body.disque;
      product.gpu = req.body.gpu;
      product.image = req.body.image;
      product.category = req.body.category;
      product.price = req.body.price;
      product.countInStock = req.body.countInStock;
      product.rating = 4;
      const updatedProduct = await product.save();
      res.send({message: "Product Updated", product: updatedProduct});
    } else {
      res.status(404).send({message: "Product Not Found"});
    }
  })
);

export default productRouter;
