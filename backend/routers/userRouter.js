import express from "express";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import data from "../data.js";
import User from "../models/usermodel.js";
import { generateToken } from "../utils.js";

const userRouter = express.Router();

userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);

userRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const users = await User.find();
    res.send({ users });
  }
));

userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          email: user.email,
          name: user.name,
          lastname:user.lastname,
          wilaya: user.wilaya,
          isAdmin: user.isAdmin,
          cart: user.cart,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "invalide email or password" });
  })
);
userRouter.post(
  '/register',
  expressAsyncHandler(async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      wilaya: req.body.wilaya,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    const createdUser = await user.save();
    res.send({
      _id: createdUser._id,
      name: createdUser.name,
      lastname: createdUser.lastname,
      wilaya: createdUser.wilaya,
      email: createdUser.email,
      isAdmin: createdUser.isAdmin,
      isSeller: createdUser.isSeller,
      cart: createdUser.cart,
      token: generateToken(createdUser),
    });
  })
);

userRouter.post(
  '/cartsave',
  expressAsyncHandler(async (req, res) => {
    const { cartItems } = req.body;
    const { userInfo } = req.body;
    if (!userInfo) {
      res.status(401).send({ message: "you must be logged in" });
      return;
    }
    const { _id } = userInfo;
    const userCart = await User.findById(_id);
    if (!userCart) {
      res.status(404).send({ message: "user not found" });
      return;
    } 
    userCart.cart = cartItems;
    await userCart.save();
    res.send({ cart: userCart.cart });
  }
)) 

/* userRouter.post(
  'cartsave',
  expressAsyncHandler(async (req, res) => {
    const cartItems  = req.body;
    const user = await user.save()  }
)) */


export default userRouter;
