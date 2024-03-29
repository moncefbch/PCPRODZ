import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    orderItems: [
      {
        name: {type: String, required: true},
        qty: {type: Number, required: true},
        image: {
          type: Array,
          required: true,
        },
        price: {type: Number, required: true},
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
      },
    ],

    shippingAddress: {
      firstName: {type: String, required: true},
      lastName: {type: String, required: true},
      address: {type: String, required: true},
      wilaya: {type: String, required: true},
      postalCode: {type: String, required: true},
      phone: {type: Number, required: true},
    },

    itemsPrice: {type: Number, required: true},
    shippingPrice: {type: Number, required: true},
    totalPrice: {type: Number, required: true},
    user: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    traite: {type: Boolean, default: false, required: true},

    //isDelivered: { type: Boolean, default: false },
    //deliveredAt: { type: Date },
  },
  {
    timestamps: true,
  }
);
const Order = mongoose.model("Order", orderSchema);
export default Order;
