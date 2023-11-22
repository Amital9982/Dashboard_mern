const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  productName: String,
  productPrice: String,
  ProductPategory: String,
  userId: String,
  productCompany: String,
});
module.exports = mongoose.model("Products", ProductSchema);
