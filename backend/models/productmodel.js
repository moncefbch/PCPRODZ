import mongoose from 'mongoose'
const productSchema = new mongoose.Schema({
    _name: {type : String, required:true},
    brand: {type : String, required:true},
    processeur: {type : String, required:true},
    ram: {type : String, required:true},
    disque: {type : String, required:true},
    gpu: {type : String, required:true},
    image: {type : String, required:true},
    description: {type : String, required:true},
    category: {type : String, required:true},
    price: {type : Number, required:true}, 
    rating: {type : Number, required:true},


},{
    timestamps: true,
}
);
const Product = mongoose.model('Product', productSchema);


export default Product;