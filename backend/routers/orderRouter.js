import express from "express";
import {isAuth} from "../utils.js";
import expressAsyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";

const orderRouter = express.Router();
orderRouter.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    if (req.body.orderItems.length === 0) {
      res.status(400).send({message: "Cart is empty"});
    } else {
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

orderRouter.get(
  "/",
  //isAuth, // isAdmin,
  expressAsyncHandler(async (req, res) => {
    const orders = await Order.find().populate("user", "name");
    res.send(orders);
  })
);

orderRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    await Order.remove({});
    // const createdProducts = await Product.insertMany(data.products);
    // res.send({createdProducts});
  })
);

export default orderRouter;
