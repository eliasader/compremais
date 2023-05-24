import mongoose from "mongoose";

mongoose.connect("mongodb+srv://CRUD:132435@crud.lspssle.mongodb.net/?retryWrites=true&w=majority");

let db = mongoose.connection;

export default db;