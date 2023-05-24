import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
        id: {type: String},
        title: {type: String, required: true},
        state: {type: Boolean, required: true}
    },{collection:"crud-proj.product"}
);

const product = mongoose.model("products", productSchema,"crud-proj.product");

await product.createCollection();

export default product;