import express from "express";
import {isAuth} from "../utils.js";
import expressAsyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";
import data from "../data.js";
import Product from "../models/productmodel.js";

const orderRouter = express.Router();

orderRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    await Order.remove({});
    // const createdOrders = await Order.insertMany(data.orders);
    // res.send({createdOrders});
  })
);

orderRouter.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    if (req.body.orderItems.length === 0) {
      res.status(400).send({message: "Cart is empty"});
    } else {
      const orderItems = req.body.orderItems;
      orderItems.forEach(async (orderItem) => {
        const product = await Product.findById(orderItem.product);
        product.countInStock = product.countInStock - orderItem.qty;
        await product.save();
      });
      const order = new Order({
        orderItems: req.body.orderItems,
        shippingAddress: req.body.shippingAddress,
        itemsPrice: req.body.itemsPrice,
        shippingPrice: req.body.shippingPrice,
        totalPrice: req.body.totalPrice,
        user: req.user._id,
      });
      const createdOrder = await order.save();
      res.status(201).send({message: "New Order Created", order: createdOrder});
    }
  })
);

/*orderRouter.get(
  "/",
  //isAuth, // isAdmin,
  expressAsyncHandler(async (req, res) => {
    const orders = await Order.find().populate("user", "name");
    res.send(orders);
  })
);*/

orderRouter.get(
  "/",
  //isAuth,
  expressAsyncHandler(async (req, res) => {
    const orders = await Order.find({});
    //const traiteOrders = orders.filter((order) => order.traite);
    //const notTraiteOrders = orders.filter((order) => !order.traite);
    //const allOrders = traiteOrders.concat(notTraiteOrders);
    if (orders) {
      res.status(200).send(orders);
    } else {
      res.status(404).send({message: "No orders found"});
    }
  })
);

//create put methode to change traite to true
orderRouter.put(
  "/:id",
  //isAuth,
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      // add the case when the admin decline the order the count instock of the product should be increased
      order.traite = true;
      const updatedOrder = await order.save();
      res.status(201).send({message: "Order traite", order: updatedOrder});
    } else {
      res.status(404).send({message: "Order not found"});
    }
  })
);

orderRouter.get(
  "/get:id",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      res.status(200).send(order);
    } else {
      res.status(404).send({message: "Order not found"});
    }
  })
);

export default orderRouter;
