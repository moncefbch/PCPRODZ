import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    _name: { type: String, required: true },
    brand: { type: String, required: true },
    processeur: { type: String, required: false },
    ram: { type: String, required: false },
    disque: { type: String, required: false },
    gpu: { type: String, required: false },
    // image: { type: String, required: true },
    image: {
      type: Array,
      default: [
        "/images/pc1_1.jpg",
        "/images/pc1_2.jpg",
        "/images/pc1_3.jpg",
        "/images/pc1_4.jpg",
      ],
      required: true,
    },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model("Product", productSchema);

export default Product;
